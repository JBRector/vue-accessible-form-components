/**
 * @Mixin formElement
 *
 * provides shared code to all form elements
 */

export const formElement = {
  data() {
    return {
      fieldValue: this.value // get the value from props
    }
  },

  watch: {
    /**
     * Watch the value of the selector and emit input event when changed
     */
    fieldValue(val) {
      this.$emit('input', val);
    }
  },

  computed: {
    errorId() {
      return `${this.id}-error`;
    },

    isInvalid() {
      return this.errorText !== '';
    }
  }
};
