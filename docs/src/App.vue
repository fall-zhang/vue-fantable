<template>
  <div class="main">
    <DocBanner></DocBanner>
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
