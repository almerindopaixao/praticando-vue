new Vue({
    el: '#app',

    data() {
        return {
            start: false,
            finish: false,
            score: { player: 100, monster: 100 },
            damage: [],
        };
    },

    methods: {
        getRandom(max) {
            return Math.floor(Math.random() * max + 1);
        },

        attack(danoJogador) {
            if (this.score.player <= 0 || this.score.monster <= 0) return;

            const damage_monster = this.getRandom(12);
            this.score.player = this.score.player - damage_monster;

            const damage_player = this.getRandom(danoJogador);
            this.score.monster = this.score.monster - damage_player;

            if (this.score.player <= 0 || this.score.monster <= 0) this.finish = true;

            this.damage.push({ player: damage_player, monster: damage_monster, cure: 0 });
        },

        heal() {
            if (this.score.player <= 0) return;

            const damage_monster = this.getRandom(12);
            const cure_player = this.getRandom(12);

            const result = this.score.player - (damage_monster - cure_player);
            
            this.score.player = result > 100 ? 100 : result;

            if (this.score.player <= 0) this.finish = true;

            this.damage.push({ player: 0, monster: damage_monster, cure: cure_player });
        },

        giveUp() {
            this.start = !this.start;
            this.score.player = 100;
            this.score.monster = 100;
            this.damage = [];
            this.finish = false;
        }
    },

    computed: {
        scoreView() {
            const score_player = this.score.player < 0 ? 0 : this.score.player;
            const score_monster = this.score.monster < 0 ? 0 : this.score.monster;

            return { player: score_player, monster: score_monster };
        },
    }
});