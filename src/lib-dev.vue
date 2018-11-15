<script>
import { VueAccessibleFormComponentsSample } from './entry';
export default {
    name:  'VueAccessibleFormComponentsLibDev', // vue library dev component
    components: {
        VueAccessibleFormComponentsSample,
    },
}
</script>

<template>
    <div class="vue-accessible-form-components-lib-dev">
        <vue-accessible-form-components-sample></vue-accessible-form-components-sample>
    </div>
</template>

<style scoped>
    .vue-accessible-form-components-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
