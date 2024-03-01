<template>
    <ve-pagination
        :total="600"
        @on-page-number-change="pageNumberChange"
        @on-page-size-change="pageSizeChange"
    />
</template>
<script>
export default {
  methods: {
    pageNumberChange(pageIndex) {
      console.log(pageIndex)
    },

    pageSizeChange(pageSize) {
      console.log(pageSize)
    },
  },
}
</script>
