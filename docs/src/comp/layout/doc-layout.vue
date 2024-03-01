<template>
  <div>
    <div class="main-wrapper">
      <!--左侧菜单-->
      <div class="main-wrapper-sidebar">
        <ul class="menu-root">
          <template v-for="(config, index) in routerConfig">
            <li v-if="config.children" :key="index">
              <a class="main-wrapper-sidebar-link" href="javascript:javascript:void(0);">
                {{ config.name }}
              </a>
              <ul class="menu-sub">
                <router-link v-for="( subConfig, subIndex ) in config.children" :key="subIndex"
                  :to="`/${currentDocLang}/doc/${config.path}/${subConfig.path}`">
                  <li>
                    <a>
                      {{ subConfig.name }}
                      <span v-show="subConfig.meta &&
                        subConfig.meta.version
                        " class="version">
                        {{
                          subConfig.meta &&
                          subConfig.meta.version
                        }}
                      </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
            <router-link v-else-if="!config.meta || !config.meta.hide" :key="index + ''" class="no-child"
              :to="`/${currentDocLang}/doc/${config.path}`">
              <li>
                <a>{{ config.name }}</a>
              </li>
            </router-link>
          </template>
        </ul>
      </div>

      <!--主体内容 Start-->
      <div class="main-wrapper-container">
        <router-view v-slot="{ Component }">
          <KeepAlive v-if="$route.meta.keepAlive">
            <component :is="Component"></component>
          </KeepAlive>
          <component :is="Component" v-else />
        </router-view>
        <!--主体内容 End-->
      </div>

      <!-- footer -->
      <Footer />
    </div>

    <!--回到顶部-->
    <div v-show="showBackTop" class="main-back-top" @click="onBackTop()">
      <UpOne theme="outline" size="28" fill="#000000" :strokeWidth="2" strokeLinejoin="bevel" strokeLinecap="butt" />
    </div>

    <!--目录-->
    <div>
      <catolog :catalog-data="catalogData" />
    </div>
  </div>
</template>

<script>
import catolog from '@/comp/catalog.vue'
import Footer from './doc-footer.vue'
import routers from '@/router/locale/index'
import { goTobyAnchorId } from '@/utils/index'
import I18nMixins from './../mixins/i18n-mixins'
import { UpOne } from '@icon-park/vue-next'

export default {
  name: 'App',
  components: { Footer, catolog, UpOne },
  mixins: [I18nMixins],
  data() {
    return {
      showBackTop: false,
      catalogData: [],
      showHide: false, // 是否显示内置组件
    }
  },
  computed: {
    routerConfig() {
      return routers[this.currentDocLang]
    },
  },
  watch: {
    $route: {
      handler: function (to, from) {
        this.anchorLink(to)
        // 显示内置组件
        this.enableHideComp(to)
      },
      immediate: true,
    },
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    onBackTop() {
      window.scroll(0, 0)
    },

    handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.scrollHeight

      this.showBackTop = scrollTop > 600
    },

    anchorLink(to) {
      const query = to.query

      if (query && query.anchor) {
        this.$nextTick((x) => {
          goTobyAnchorId(this, query.anchor)
        })
      }

      this.$nextTick((x) => {
        const anchorLinkArr = this.$el.querySelectorAll('.anchor-link')
        const catalogData = []

        if (anchorLinkArr && anchorLinkArr.length > 0) {
          for (let i = 0, len = anchorLinkArr.length; i < len; i++) {
            catalogData.push({
              id: anchorLinkArr[i].id,
              label: anchorLinkArr[i].getAttribute('label'),
            })
          }
        }

        this.catalogData = catalogData
      })
    },

    // select、checkbox、dropdown 等组件都是内置的，showHide=1 则开启
    enableHideComp(to) {
      const query = to.query

      if (query.showHide && query.showHide === 1) {
        this.showHide = true
      }
    },
    // setFavicon() {
    //     var link =
    //         document.querySelector("link[rel*='icon']") ||
    //         document.createElement("link");
    //     link.type = "image/x-icon";
    //     link.rel = "shortcut icon";
    //     link.href = require("./../../images/favicon.png");
    //     document.getElementsByTagName("head")[0].appendChild(link);
    // },
  },
}
</script>

<style scoped lang="less">
/* 回到顶部 start */
.main-back-top {
  position: fixed;
  cursor: pointer;
  bottom: 100px;
  right: 38px;
  border: 1px solid #969696;
  // background-color: #;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1;
  transition: .3s;

  &:hover {
    background-color: #8b9bcd;
  }
}
</style>