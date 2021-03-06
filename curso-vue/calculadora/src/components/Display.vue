<template>
  <div class="display">
    <span>{{ value | customize }}</span>
  </div>
</template>

<script>
export default {
    props: ['value'],

    filters: {
        customize(value) {
            return value;
        },
    }
}
</script>

<style>
    .display {
        grid-column: span 4;
        background-color: #0004;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px;
        overflow: hidden;
    }

    .display span {
        font-size: 2.1em;
        font-weight: 200;
    }
</style>