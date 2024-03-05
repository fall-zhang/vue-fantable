<template>
  <div class="main-banner">
    <div class="main-banner-warpper">
      <!-- logo -->
      <div class="main-banner-logo">
        <FoldingFan /> vue-fantable
      </div>
      <!-- menus -->
      <div class="main-banner-menus-container">
        <div class="main-banner-menus">
          <span v-for="item in currentLocal.menus" :key="item.name" :class="[
      'main-banner-menu-item',
      activeMenuClass(item),
    ]">
            <a class="main-banner-menu-link" href="javascript:void(0)" @click="gotoRouter(item)">
              {{ item.name }}
            </a>
          </span>

          <!-- switch lang -->
          <span class="main-banner-menu-item">
            <div v-click-outside="() => (showLangDropdown = false)
      " class="switch-lang-container">
              <span class="switch-lang" @click="
      showLangDropdown = !showLangDropdown
      ">
                <i class="icon iconfont icon-translate" />
                <i class="icon iconfont icon-dropdown" />
              </span>
              <div class="switch-lang-dropdown-pannel" :class="showLangDropdown
      ? 'dropdown-pannel-show'
      : ''
      ">
                <span v-for="item in switchLangOptions" :key="item.value" :class="{
      'dropdown-item': true,
      active: item.value === currentDocLang,
    }" @click.stop="onChangeLang(item)">
                  {{ item.label }}
                </span>
              </div>
            </div>
          </span>

          <!-- switch theme -->
          <span class="main-banner-menu-item">
            <div v-click-outside="() => (showThemeDropdown = false)
      " class="switch-theme-container">
              <span class="switch-theme" @click="
      showThemeDropdown = !showThemeDropdown
      ">
                {{ currentLocal.docTheme }}
                <i class="icon iconfont icon-dropdown" />
              </span>
              <div class="switch-theme-dropdown-pannel" :class="{ 'dropdown-pannel-show': showThemeDropdown }">
                <span v-for="item in currentLocal.switchDocThemeOptions" :key="item.value" :class="{
      'dropdown-item': true,
      active: item.value === currentDocTheme,
    }" @click.stop="onThemeChange(item)">
                  {{ item.label }}
                </span>
              </div>
            </div>
          </span>

          <!-- switch version -->
          <span class="main-banner-menu-item">
            <div v-click-outside="() => (showVersionDropdown = false)
      " class="switch-version-container">
              <span class="switch-version" @click="
      showVersionDropdown =
      !showVersionDropdown
      ">
                {{ currentDocVersion }}
                <i class="icon iconfont icon-dropdown"></i>
              </span>
              <div class="switch-version-dropdown-pannel" :class="{
      'dropdown-pannel-show': showVersionDropdown
    }
      ">
                <span v-for="item in switchVersionOptions" :key="item.value" :class="{
      'dropdown-item': true,
      active: item.label === currentDocVersion,
    }" @click.stop="versionChange(item)">
                  {{ item.label }}
                </span>
              </div>
            </div>
          </span>

          <span class="main-banner-menu-item">
            <a class="main-banner-menu-link" href="https://github.com/fall-zhang/vue-fantable">
              <i class="icon iconfont icon-github"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDocTheme, setDocTheme } from '@/utils/cookies'
import locale from '@/comp/locale'
import I18nMixins from '@/comp/mixins/i18n-mixins'
import ThemeSwitchMixins from '@/comp/mixins/theme-switch-mixins.js'
import clickoutside from '@/comp/directives/clickoutside.js'
import { version as latestVersion } from '../../../package.json'

import { getVersions } from '@/api/index.js'
import FoldingFan from '@/components/icons/folding-fan.vue'

export default {
  directives: {
    'click-outside': clickoutside,
  },
  components: {
    FoldingFan
  },
  mixins: [I18nMixins, ThemeSwitchMixins],
  data() {
    return {
      // switch lang option
      switchLangOptions: [
        { value: 'en', label: 'English' },
        { value: 'zh', label: '简体中文' },
      ],
      // show lang dropdown
      showLangDropdown: false,
      // switch version option,
      switchVersionOptions: [],
      showVersionDropdown: false,
      // show theme dropdown
      showThemeDropdown: false,
      // default doc theme
      defalutDocTheme: 'default',
      // current doc theme
      currentDocTheme: '',
    }
  },
  computed: {
    // current local
    currentLocal() {
      return locale[this.currentDocLang]
    },

    // show logo
    showLogo() {
      return window.env !== 'dev'
    },

    // current doc version
    currentDocVersion() {
      const { switchVersionOptions } = this

      const { pathname } = window.location

      const versionItem = switchVersionOptions.find(
        (x) => x.value === pathname,
      )

      return versionItem ? versionItem.label : latestVersion
    },
  },
  watch: {
    currentDocLang() {
      // this.$veLocale.use(locale[this.currentDocLang].compLang)
    },
  },
  created() {
    getVersions().then(({ data }) => {
      this.switchVersionOptions = data
    })
  },
  mounted() {
    this.initDocTheme()
  },
  methods: {
    // lang change
    onChangeLang(item) {
      const { matched } = this.$route
      const lang = item.value
      if (matched[0].path !== `/${lang}`) {
        const path = this.$route.path.replace(
          this.currentDocLang,
          lang,
        )
        this.$router.replace(path)
        // this.$router.replace(path)
        // this.$veLocale.use(locale[lang].compLang)
      }

      // setTimeout(() => {
      //   this.showLangDropdown = false
      // }, 150)
    },
    // theme change
    onThemeChange({ value }) {
      setDocTheme(value)
      this.currentDocTheme = value
      this.showThemeDropdown = false
      setTimeout(() => {
        window.location.reload()
      }, 50)
    },
    // version change
    versionChange(item) {
      const { protocol, host, pathname, hash } = window.location
      // version 1.0
      if (item.isVersion1) {
        const newUrl = protocol + '//' + host + item.value
        window.open(newUrl, '_blank')
      } else {
        // const newUrl = protocol + '//' + host + item.value + hash
        window.open(item.value, '_self')
      }
    },
    // go ro router path
    gotoRouter(item) {
      if (item.isRouter) {
        this.$router
          .push({ path: `/${this.currentDocLang}${item.path}` })
          .catch(() => { })
      } else {
        window.open(item.path, '_blank')
      }
    },
    activeMenuClass(item) {
      let result = ''

      const { matched } = this.$route
      if (
        matched &&
        matched.length > 0 &&
        matched.some(
          (x) => x.path === `/${this.currentDocLang}${item.path}`,
        )
      ) {
        result = 'link-active'
      }
      return result
    },
    // init theme
    initDocTheme() {
      this.currentDocTheme = getDocTheme() ?? this.defalutDocTheme
      // 初始化
      if (window.env !== 'dev') {
        this.switchThemeMix(this.currentDocTheme)
      }
      console.log('current doc theme ::', this.currentDocTheme)
    },
    switchThemeMix(theme) {
      console.log(this.currentDocTheme)
      // window.location.reload()
    }
  },
}
</script>

<style scoped lang="less">
// 左侧内容宽度
@-main-left-content-width: 15.62%;
@-main-left-content-min-width: 240px;
@-main-left-content-max-width: 280px;
@-header-index: 999;
// 左侧内容 padding
@-main-left-content-padding: 25px;
// 右侧内容宽度
@-main-right-content-width: 70%;
@-main-right-content-min-width: 760px;
@-main-right-content-max-width: 1080px;

/* 头部导航 */
.main-banner {
  width: 100%;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: center;
  height: 60px;
  background-color: #fff;
  z-index: @-header-index;
  background: #fff;
  -webkit-box-shadow: 0 2px 8px #f0f1f2;
  box-shadow: 0 2px 8px #f0f1f2;

  .main-banner-warpper {
    min-width: calc(240px + 760px);
    width: 100%;
    max-width: calc(280px + 1080px);
    height: 100%;
    display: flex;
    line-height: 60px;
    font-size: 20px;
    font-weight: bold;
    color: #0092dd;

    .main-banner-logo {
      display: flex;
      align-items: center;
      width: @-main-left-content-width;
      min-width: @-main-left-content-min-width;
      max-width: @-main-left-content-max-width;
      padding-left: @-main-left-content-padding;
    }

    .main-banner-menus-container {
      width: @-main-right-content-width;
      min-width: @-main-right-content-min-width;
      max-width: @-main-right-content-max-width;
      height: 100%;
      margin: 0 auto;

      .main-banner-menus {
        display: block;
        float: right;
        font-weight: normal;
        font-size: 14px;

        .main-banner-menu-item {
          position: relative;
          display: inline-block;
          min-width: 100px;
          text-align: center;
          padding: 0 8px;
          height: 60px;
          line-height: 60px;
          font-size: 16px;

          .switch-lang-container,
          .switch-theme-container,
          .switch-version-container {
            position: relative;
            line-height: 1;

            .switch-lang-dropdown-pannel,
            .switch-theme-dropdown-pannel,
            .switch-version-dropdown-pannel {
              position: absolute;
              display: none;
              max-height: 300px;
              overflow: auto;
              margin-top: 10px;
              padding: 8px 0;
              border: 1px solid #d1dbe5;
              background-color: #fff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
                0 0 6px rgba(0, 0, 0, 0.04);

              &.dropdown-pannel-show {
                display: block;
              }

              .dropdown-item {
                display: inline-block;
                width: 100%;
                height: 32px;
                line-height: 32px;
                text-align: left;
                font-size: 14px;
                color: #000000d9;
                padding: 0 8px;
                margin-bottom: 3px;
                cursor: pointer;

                &:hover {
                  background-color: #eee;
                }

                &.active {
                  background-color: #e6f7ff;
                  color: #108ee9;
                }
              }
            }
          }

          .main-banner-menu-link {
            color: #666;

            .icon {
              font-size: 22px;
            }
          }

          .switch-lang,
          .switch-theme,
          .switch-version {
            color: #666;
            cursor: pointer;

            &:hover {
              color: #409eff;
            }
          }

          &.link-active {
            .main-banner-menu-link {
              &:after {
                content: "";
                display: inline-block;
                position: absolute;
                bottom: 0;
                left: calc(50% - 20px);
                width: 40px;
                height: 2px;
                background: #409eff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
