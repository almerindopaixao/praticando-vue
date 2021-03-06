<template>
  <button class="button"
    :class="{ double, triple, operation }"
    @click="$emit('onCalcButtonClick', label)"
  >
      {{ label }}
  </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        operation: {
            type: Boolean,
            required: false,
            default: false,
        },
        double: {
            type: Boolean,
            required: false,
            default: false,
        },
        triple: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
}
</script>

<style>
    :root {
        --bg-button: #f0f0f0;
        --border-button: solid 1px #888;
    }

    .button {
        font-size: 1.4em;
        background-color: var(--bg-button);
        border: none;
        border-right: var(--border-button);
        border-bottom: var(--border-button);
        outline: none;
        cursor: pointer;
    }

    .button:active {
        background: #ccc;
    }

    .button.double {
        grid-column: span 2;
    }

    .button.triple {
        grid-column: span 3;
    }

    .button.operation {
        background-color: #fa8231;
        color: #fff;
    }

    .button.operation:active {
        background-color: #fa8231cc;
    }

    
</style>