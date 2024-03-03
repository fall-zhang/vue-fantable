<template>
  <div class="catalog-container">
    <ul v-show="catalogData && catalogData.length > 0" class="catalog-ul">
      <li class="catalog-li-title">
        {{ catalogTitle }}
      </li>
      <li v-for="(item, index) in catalogData" :key="index" :title="item.label" class="catalog-li">
        <a @click.stop="goAnchor(item.id)">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import locale from '@/comp/locale'
import { goTobyAnchorId } from '@/utils/index'
import I18nMixins from '@/comp/mixins/i18n-mixins'

export default {
  name: 'VueCatalog',
  mixins: [I18nMixins],
  props: {
    catalogData: {
      type: Array,
      required: true,
    },
    showCatalogList: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
    }
  },
  computed: {
    // catalog title
    catalogTitle() {
      return locale[this.currentDocLang].anchorCatalogTitle
    },
  },
  methods: {
    goAnchor(id) {
      goTobyAnchorId(this, id)
    },
  },
}
</script>

<style lang="less" scoped>
.catalog-container {
  position: sticky;
  top: 80px;
  margin-left: 24px;
  min-width: 160px;
  max-width: 220px;
  height: fit-content;

  .catalog-corner {
    z-index: 99;
    cursor: pointer;
    display: block;
    width: 45px;
    height: 180px;
    background-color: #fff;
    border-radius: 5px 0 0 5px;
    border: solid 1px #eee;
    font-size: 15px;
    padding: 60px 10px;
    line-height: 1.9;
    font-weight: bold;
    color: #666;
  }

  .catalog-ul {
    z-index: 10;
    display: block;
    list-style: none;

    margin: 0;
    padding: 10px;
    background-color: #fff;
    border-radius: 3px;
    border-left: solid 1px #dddddd;
    font-size: 12px;

    .catalog-li-title {
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 10px;
      color: #666;
    }

    .catalog-corner:hover,
    .catalog-li-title:hover {
      color: #000;
    }

    .catalog-li-title-down {
      font-size: 14px;
      margin-left: 10px;
    }

    .catalog-li {
      line-height: 2.1em;
      display: list-item;
      white-space: nowrap;
      word-wrap: normal;
      overflow: hidden;
      text-overflow: ellipsis;

      a {
        cursor: pointer;
      }
    }
  }
}
</style>
