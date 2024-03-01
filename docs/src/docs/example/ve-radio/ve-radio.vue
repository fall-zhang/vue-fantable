<template>
  <div>
    <div>
      <div class="bold">单选</div>
      <ve-radio v-model="radioVal" @on-radio-change="radioChange">Radio</ve-radio>
      <div>{{ radioVal }}</div>
    </div>

    <div>
      <div class="bold">单选禁用</div>
      <ve-radio v-model="radioVal2" disabled>Radio</ve-radio>
      <div>{{ radioVal2 }}</div>
    </div>

    <div>
      <div class="bold">单选禁用</div>
      <ve-radio v-model="radioVal3" disabled>Radio</ve-radio>
      <div>{{ radioVal3 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioVal: false,
      radioVal2: false,
      radioVal3: true,
    }
  },
  methods: {
    radioChange(val) {
      console.log('radioChange::', val)
    },
  },
}
</script>
