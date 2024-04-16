<template>
  <div ref="$loadingEl" :style="loadingStyle" :class="['ve-loading', loadingClass]">
    <div :class="clsName('spin-container')">
      <div :class="clsName('spin')">
        <component :is="loadIcon" v-bind="spinProps"></component>
      </div>
      <div :style="{ color: color }" :class="clsName('spin-tip')">
        {{ tip }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { clsName } from './util/index'
import { VueElement, computed, nextTick, ref } from 'vue'
import { COMPS_NAME } from './util/constant'
import { addClass, removeClass } from '../../src/utils/dom'
import Plane from './components/plane'
import Bounce from './components/bounce'
import Wave from './components/wave'
import Pulse from './components/pulse'
import Flow from './components/flow'
import Grid from './components/grid'
import type { Component } from 'vue'
const PARENT_LOCK_CLASS = clsName('parent-lock')
const PARENT_RELATIVE_CLASS = clsName('parent-relative')

const props = withDefaults(defineProps<{
  overlayBackgroundColor?: string
  fullscreen?: boolean
  name: 'Grid' | 'Flow' | 'Pulse' | 'Wave' | 'Bounce' | 'Plane'
  width: string | number
  height: string | number
  color: string
  lock: boolean
  tip: string
  parentElement: VueElement
}>(), {
  name: 'Grid',
  overlayBackgroundColor: 'rgba(255, 255, 255, 0.5)'
})
const $loadingEl = ref<VueElement>()
const loadingStyle = computed<{
  backgroundColor?: string
}>(() => {
  return {
    backgroundColor: props.overlayBackgroundColor,
  }
})
const loading = ref(false)
const loadingClass = computed(() => {
  const clsFixed = clsName('fixed')
  const clsHide = clsName('hide')

  const result = {
    [clsName('overlay')]: true,
    [clsFixed]: props.fullscreen,
    [clsHide]: !loading.value,
  }
  return result
})
const loadIcon: Component = computed(() => {
  const name = props.name
  const loadingName = name.at(0)?.toUpperCase() + name.slice(1)
  const map: Record<string, Component> = { Plane, Bounce, Wave, Pulse, Flow, Grid }
  return map[loadingName]
})

const spinProps = ref({
  width: props.width,
  height: props.height,
  color: props.color
})

function show() {
  nextTick(() => {
    if (props.lock) {
      addClass($loadingEl.value, PARENT_LOCK_CLASS)
    }
    loading.value = true
    console.log('打开-------', loading.value)
  })
}
function close() {
  console.log('关闭')
  nextTick(() => {
    if (props.lock) {
      removeClass(props.parentElement, PARENT_LOCK_CLASS)
    }
    loading.value = false
  })
}
function unmounted() {
  removeClass(props.parentElement, PARENT_RELATIVE_CLASS)
  removeClass(props.parentElement, PARENT_LOCK_CLASS)

  if ($loadingEl.value && props.parentElement) {
    $loadingEl.value.remove()
  }
  loading.value = false
}
function destroy() {
  unmounted()
}
defineExpose({
  show,
  close,
  unmounted,
  destroy
})
</script>
<script lang="ts">
export default {
  name: COMPS_NAME.VE_LOADING
}

</script>
