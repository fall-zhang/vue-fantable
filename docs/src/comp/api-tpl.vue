<template>
  <div class="api-tpl">
    <vue-anchor :is-edit="false" :label="getAnchor" />
    <div class="api-tpl-desc">{{ desc }}</div>
    <fan-table class="tpl-table " :columns="columns" :table-data="cloneTable" :border-around="true" :border-x="true"
      :border-y="false" row-key-field-name="__key__" :expand-option="expandOption"
      :cell-selection-option="cellSelectionOption" />
  </div>
</template>

<script>
export default {
  name: 'ApiTpl',
  props: {
    desc: {
      type: String,
      required: true,
    },
    anchor: {
      type: String,
      default: null,
    },
    tableData: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    expandOption: {
      type: Object,
      default() {
        return null
      },
    },
  },

  data() {
    return {
      cellSelectionOption: {
        // default true
        enable: false,
      },
      cloneTable: [],
    }
  },
  computed: {
    getAnchor() {
      // return ''
      return this.anchor ? this.anchor : this.desc
    },
  },
  watch: {
    // auto create row key
    tableData: {
      handler(val) {
        if (val) {
          this.cloneTable = val.map((item, index) => ({
            ...item,
            __key__: index
          }))
        }
        // console.log(this.cloneTable, this.columns);
        //
        setTimeout(() => {
          console.log(this.cloneTable, this.columns)
          this.$forceUpdate()
        }, 2000)
      },
      immediate: true,
    },
  },
}
</script>

<style lang="less">
.api-tpl {
  margin-bottom: 30px;

  .api-tpl-desc {
    height: 30px;
  }

  .tpl-table {

    td,
    th {
      color: #5e6d82 !important;
      font-size: 14px;

      code {
        display: inline-block;
        background: #f7f7f7;
        font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono,
          monospace;
        margin: 0 3px;
        padding: 1px 5px;
        border-radius: 3px;
        color: #666;
        border: 1px solid #eee;
      }
    }

    td:first-child {
      code {
        margin: 0;
        padding: 2 px 6 px;
        color: #1989fa;
        font-weight: 600;
        font-size: 11px;
        background-color: rgba(25, 137, 250, 0.1);
        border-radius: 20 px;
      }
    }

    td {
      .expand {
        font-weight: bold;
      }
    }
  }
}
</style>
