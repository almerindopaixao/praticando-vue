<template>
    <div class="citacao">
        <slot name="fonte"></slot>
        <slot></slot>
        <div class="autor">
            <slot name="autor"></slot>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        // eslint-disable-next-line no-console
        console.log('created');
    },

    destroyed() {
        // eslint-disable-next-line no-console
        console.log('destroyed');
    },

    activated() {
        // eslint-disable-next-line no-console
        console.log('activated');
    },

    deactivated() {
        // eslint-disable-next-line no-console
        console.log('desactivated');
    },
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .autor {
        float: right;
    }
</style>
