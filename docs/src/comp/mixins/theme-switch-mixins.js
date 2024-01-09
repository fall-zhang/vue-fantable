// import ThemeSwitcherTool from './theme-switch-tool.js'

const styleLinkId = 'theme_creator_cli_style_id'

export default {
  methods: {
    // switch theme mix
    switchThemeMix(themeName) {
      return new Promise((resolve, reject) => {
        // themeSwitcherTool
        //   .switcher({
        //     themeName,
        //   })
        //   .then(() => {
        //     resolve()
        //   })
        //   .catch(reject)
      })
    },
  },
  mounted() {
    // 防止已发布的样式文件，对正在开发的样式有干扰
    if (process.env.NODE_ENV === 'development') {
      const themeLink = document.getElementById(styleLinkId)
      if (themeLink) {
        themeLink.parentNode.removeChild(themeLink)
      }
    }
  },
}
