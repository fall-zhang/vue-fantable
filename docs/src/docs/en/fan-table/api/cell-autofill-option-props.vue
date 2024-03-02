<template>
  <div>
    <ApiTpl :desc="desc" :anchor="anchor" :table-data="db.cellAutofillOption.data"
      :columns="db.cellAutofillOption.columns" />
  </div>
</template>
<script>
import ApiTpl from '@/comp/api-tpl.vue'
import { db } from './db'
export default {
  components: { ApiTpl },
  props: {
    anchor: {
      type: String,
      default: 'Cell Autofill Option',
    },
    desc: {
      type: String,
      default: 'cellAutofillOption',
    },
  },
  data() {
    return {
      db,
    }
  },
}
</script>
