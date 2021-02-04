<template>
    <div @click="concluirTarefa" :class="{ finish: concluida }" class="card-container">
        <p><slot></slot></p>
        <span @click="removerTarefa" class="cancel-btn">x</span>
    </div>
</template>

<script>
export default {
    props: {
        index: Number,
    },

    data() {
        return {
            concluida: false,
        };
    },

    methods: {
        removerTarefa() {
            const index = this.index;
            this.$emit('rmTarefa', index);
        },

        concluirTarefa() {
            this.concluida = !this.concluida;

            const cont = this.concluida ? 1 : -1;
            this.$emit('clTarefa', cont);
        },
    }
}
</script>

<style scoped>
    .card-container {
        width: 300px;
        height: 150px;

        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;

        box-shadow: -8px 0px rgb(177, 9, 9);
        background-color: rgb(236, 56, 56);

        border-radius: 10px;

        cursor: pointer;
    }

    .finish {
        box-shadow: -8px 0px rgb(19, 110, 19);
        background-color: rgb(51, 145, 51);

        text-decoration: line-through;
    }

    .card-container p {
        font-size: 24px;
    }

    .cancel-btn {
        position: absolute;
        font-size: 20px;

        cursor: pointer;

        top: 5px;
        right: 15px;
    }
</style>