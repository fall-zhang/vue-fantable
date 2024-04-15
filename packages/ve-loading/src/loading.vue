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
import { Component, VueElement, computed, nextTick, ref } from 'vue'
import { COMPS_NAME, SPIN_NAMES } from './util/constant'
import { addClass, removeClass } from '../../src/utils/dom'
import Plane from './components/plane'
import Bounce from './components/bounce'
import Wave from './components/wave'
import Pulse from './components/pulse'
import Flow from './components/flow'
import Grid from './components/grid'
const PARENT_LOCK_CLASS = clsName('parent-lock')
const PARENT_RELATIVE_CLASS = clsName('parent-relative')

const props = withDefaults(defineProps<{
  overlayBackgroundColor?: string
  fullscreen?: boolean
  name: 'Grid' | 'Flow' | 'Pulse' | 'Wave' | 'Bounce' | 'Plane'
  width: string
  height: string
  color: string
  tip: string
  parentElement: VueElement
}>(), {
  name: 'Grid'
})
const $loadingEl = ref<VueElement>()
const loadingStyle = computed<{
  backgroundColor?: string
}>(() => {
  const { overlayBackgroundColor } = props

  return {
    backgroundColor: overlayBackgroundColor,
  }
})

const loadingClass = computed(() => {
  const { fullscreen } = props
  const clsFixed = clsName('fixed')
  const clsHide = clsName('hide')
  const result = {
    [clsName('overlay')]: true,
    [clsFixed]: fullscreen,
    [clsHide]: !loading.value,
  }
  return result
})
const loadIcon: Component = computed(() => {
  const name = props.name
  const map: Record<string, Component> = { Plane, Bounce, Wave, Pulse, Flow, Grid }
  const result = (name.at(0)!).toUpperCase() + name.slice(1)
  return map[result]
})
const loading = ref(false)

const spinProps = ref({
  width: props.width,
  height: props.height,
  color: props.color
})

function show() {
  nextTick(() => {
    addClass($loadingEl.value, PARENT_LOCK_CLASS)
    loading.value = true
  })
}
function close() {
  nextTick(() => {
    removeClass(props.parentElement, PARENT_LOCK_CLASS)
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
