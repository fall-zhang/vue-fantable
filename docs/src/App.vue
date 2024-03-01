<template>
  <div class="main">
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
    <router-view #="{ Component }">
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component"></component>
      </keep-alive>
      <component :is="Component" v-else></component>
    </router-view>
  </div>
</template>

<script>
import { getDocTheme, setDocTheme } from '@/utils/cookies'
import locale from './comp/locale'
import I18nMixins from './comp/mixins/i18n-mixins'
import ThemeSwitchMixins from './comp/mixins/theme-switch-mixins.js'
import clickoutside from './comp/directives/clickoutside.js'
import { version as latestVersion } from '../../package.json'

import { getVersions } from '@/service/index.js'
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
