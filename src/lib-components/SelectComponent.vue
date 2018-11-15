<template>
  <div :class="containerClasses">
    <label :class="labelClasses" :for="id">
      {{label}}
      <span v-if="required" class="-required">*</span>
      <span v-if="required" class="visually-hidden">This field is required</span>
    </label>
    <div class="select">
      <select
        v-model="fieldValue"
        :id="id"
        :name="id"
        :aria-describedby="errorText !== '' ? errorId : null"
        :aria-invalid="isInvalid"
        @change="fieldChange || null"
      >
        <option :value="defaultValue">{{defaultValue}}</option>
        <option v-for="(option, i) in options" :value="option" :key="`${id}-option-${i}`">{{option}}</option>
      </select>
      <div class="select__selectedText">{{fieldValue}}</div>
    </div>
    <div v-if="errorText !== ''" :id="errorId">
      <span class="-error">{{errorText}}</span>
    </div>
  </div>
</template>

<script>
  import { formElement } from '../mixins/formElement';

  export default {
    name: 'SelectComponent',

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
      defaultValue: {
        type: String,
        default: 'Select One'
      },
      options: {
        type: Array,
        required: true
      },
      value: String,
      change: Function,
      errorText: {
        type: String,
        default: ''
      }
    },

    methods: {
      fieldChange() {
        setTimeout(() => {
          this.change();
        }, 100);
      }
    },
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
