<template>
    <div>
        <h2>dropdown 下拉</h2>
        <div>
            <vue-anchor label="单选功能" />
            <SingleSelect />
        </div>
        <div>
            <vue-anchor label="多选功能" />
            <MultipleSelect />
        </div>
        <div>
            <vue-anchor label="操作" />
            <Operation />
        </div>
        <div>
            <vue-anchor label="自定义下拉内容" />
            <CustomContent />
        </div>
        <div>
            <vue-anchor label="回调函数" />
            <callbackMethods />
        </div>
        <API />
    </div>
</template>

<script>
import SingleSelect from './single-select.md'
import MultipleSelect from './multiple-select.md'
import Operation from './operation.md'
import CustomContent from './custom-content.md'
import callbackMethods from './callback-methods.md'
import API from './api.md'

export default {
  name: 'FanDropDown',
  components: {
    SingleSelect,
    MultipleSelect,
    Operation,
    CustomContent,
    callbackMethods,
    API,
  },
}
</script>
