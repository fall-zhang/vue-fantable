<template>
  <div>
    <tpl :desc="desc" :anchor="anchor" :table-data="db.columns.filterProps.data"
      :columns="db.columns.filterProps.columns" />
  </div>
</template>
<script>
import tpl from '@/comp/api-tpl.vue'
import { db } from '../db'
export default {
  components: { tpl },
  props: {
    anchor: {
      type: String,
      default: 'Filter',
    },
    desc: {
      type: String,
      default: 'filter',
    },
  },
  data() {
    return {
      db,
    }
  },
}
</script>
