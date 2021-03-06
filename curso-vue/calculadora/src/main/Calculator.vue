<template>
  <div class="calculator">
      <Display :value="displayValue" />
      <Button 
        v-for="button in buttons" 
        :triple="button.triple"
        :label="button.label"
        :double="button.double"
        :operation="button.operation"
        :key="button.id" 
        @onCalcButtonClick="handleClickButton"
        />
  </div>
</template>

<script>
import Button from '../components/Button';
import Display from '../components/Display.vue';
import buttons from '../utils/buttons';

export default {
    components: { Display, Button },

    data() {
        return { 
            buttons,
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0,
        };
    },

    methods: {
        handleClickButton(label) {
            if (!label) return;

            if (label === 'AC') {
                this.cleanMemory();
            } else if (
                !isNaN(Number(label)) || label === '.'
            ) {
                this.addDigit(label);
            } else {
                this.setOperation(label);
            }
        },
        cleanMemory() {
            Object.assign(this.$data, this.$options.data());
        },

        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation;
                this.current = 1;
                this.clearDisplay = true; 
            } else {
                const equals = operation === "=";
                const currentOperation = this.operation;

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch(err) {
                    this.$emit('onError', err);
                }

                this.values[1] = 0

                this.displayValue = this.values[0];
                this.operation = equals ? null : operation;
                this.current = equals ? 0 : 1;
                this.clearDisplay = !equals;
            }
        },

        addDigit(n) {
            if (n === '.' && this.displayValue.includes('.')) {
                return;
            }

            const clearDisplay = this.displayValue === '0'
                || this.clearDisplay;

            const currentValue = clearDisplay ? "" : this.displayValue;
            const displayValue = currentValue + n;

            this.displayValue = displayValue;
            this.clearDisplay = false;
            this.values[this.current] = displayValue;
        },
    },
}   
</script>

<style>
    .calculator {
        margin-top: 40px;
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr repeat(5, 48px);
    }
</style>