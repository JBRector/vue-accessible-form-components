<template>
  <div :class="containerClasses">
    <label :class="labelClasses" :for="id">
      {{label}}
      <span v-if="required" class="-required">*</span>
      <span v-if="required" class="visually-hidden">This field is required</span>
    </label>
    <input
      v-model="fieldValue"
      type="text"
      :class="fieldClasses"
      :id="id"
      :name="id"
      :aria-describedby="errorText !== '' ? errorId : null"
      :aria-invalid="isInvalid"
      :maxlength="maxLength || null"
      :placeholder="placeholder || null"
    >
    <div v-if="errorText !== ''" :id="errorId">
      <span class="-error">{{errorText}}</span>
    </div>
  </div>
</template>

<script>
  import { formElement } from '../mixins/formElement';

  export default {
    name: 'TextInput',

    mixins: [formElement],

    props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false
      },
      fieldClasses: [String, Object],
      containerClasses: [String, Object],
      labelClasses: [String, Object],
      value: String,
      errorText: {
        type: String,
        default: ''
      },
      maxLength: Number,
      placeholder: String
    }
  }
</script>

<style scoped>
  .visually-hidden {
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
  }
</style>
