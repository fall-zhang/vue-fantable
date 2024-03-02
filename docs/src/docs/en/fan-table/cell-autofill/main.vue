<template>
  <div>
    <h2>Cell Autofill</h2>
    <Description />
    <AutofillDirection />
    <CellAutofillOption title="API" anchor="API" />
  </div>
</template>
<script>
import Description from './explain.md'
import AutofillDirection from './autofill-direction.md'
import CellAutofillOption from '../api/cell-autofill-option-props.vue'

export default {
  name: 'CellSelection',
  components: {
    Description,
    AutofillDirection,
    CellAutofillOption,
  },
}
</script>
