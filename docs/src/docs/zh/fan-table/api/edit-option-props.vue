<template>
  <div>
    <!-- {{ editOption.columns }} -->
    <ApiTpl :desc="desc" :anchor="anchor" :table-data="editOption.data" :columns="editOption.columns" />
    <!-- {{ editOption.data }} -->
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
      default: '单元格编辑配置',
    },
    desc: {
      type: String,
      default: 'editOption',
    },
  },
  data() {
    return {
      editOption: db.editOption,
    }
  },
}
</script>
