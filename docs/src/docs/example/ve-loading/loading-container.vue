<template>
    <div>
        <button class="button-demo" @click="show()">开启 Loading</button>
        <button class="button-demo" @click="close()">关闭 Loading</button>
        <br />
        <br />
        <fan-table id="loading-container" :columns="columns" :table-data="tableData" />
    </div>
</template>
<script>
export default {
  data() {
    return {
      loadingInstance: null,
      columns: [
        { field: 'name', key: 'a', title: 'Name', align: 'center' },
        { field: 'date', key: 'b', title: 'Date', align: 'left' },
        {
          field: 'hobby',
          key: 'c',
          title: 'Hobby',
          align: 'right',
        },
        { field: 'address', key: 'd', title: 'Address' },
      ],
      tableData: [
        {
          name: 'John',
          date: '1900-05-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Shanghai',
        },
        {
          name: 'Dickerson',
          date: '1910-06-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Beijing',
        },
        {
          name: 'Larsen',
          date: '2000-07-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Chongqing',
        },
        {
          name: 'Geneva',
          date: '2010-08-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Xiamen',
        },
        {
          name: 'Jami',
          date: '2020-09-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Shenzhen',
        },
      ],
    }
  },
  mounted() {
    this.loadingInstance = this.$veLoading({
      target: document.querySelector('#loading-container'),
      // 等同于
      // target:"#loading-container"
      name: 'wave',
    })
    this.show()
  },
  unmounted() {
    this.loadingInstance.destroy()
  },
  methods: {
    show() {
      this.loadingInstance.show()
    },
    close() {
      this.loadingInstance.close()
    },
  },
}
</script>