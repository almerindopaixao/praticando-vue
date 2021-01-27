new Vue({
   el: '#app',
   
   data() {
       return {
           running: false,
           life: { player: 100, monster: 100 },
           logs: [],
       };
   },

   computed: {
        hasResult() {
            return this.life.player == 0 || this.life.monster == 0;
        },
   },

   methods: {
        startGame() {
           this.running = true;
           this.life.player = 100;
           this.life.monster = 100;
        },

        attack(especial) {
            this.hurt('monster', 5, 10, especial, 'Jogador', 'Monstro', 'player');

            if (this.life.monster > 0) {
                this.hurt('player', 7, 12, false, 'Monstro', 'Jogador', 'monster');
            }
        },

        hurt(atr, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this.life[atr] = Math.max(this.life[atr] - hurt, 0);
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls);
        },

        healAndHurt() {
            this.heal(10, 15);
            this.hurt('player', 7, 12, false, 'Monstro', 'Jogador', 'monster');
        },

        heal(min, max) {
            const heal = this.getRandom(min, max);
            this.life.player = Math.min(this.life.player + heal, 100);
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player');
        },

        getRandom(min, max) {
           const value = Math.random() * (max - min) + min;
           return Math.round(value);
        },

        registerLog(text, cls) {
            this.logs.unshift({ text, cls });
        }
    },

   watch: {
        hasResult(value) {
            if (value) this.running = false;
        },
   },

});