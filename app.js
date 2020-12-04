new Vue({
	el:'#app',
	data:{
		playerH:0,
		monsterH:0,
		starGame:false,
	},
	methods: {
		beginGame: function() {
			this.starGame=true;
			this.playerH=100;
			this.monsterH=100;
		},
		attack: function() {
			//moster
			var maxDamage = 30;
			var minDamage = 25;
			var damage = Math.max(Math.floor(Math.random()*maxDamage)+1, minDamage);
			this.monsterH -= damage;

			if (this.monsterH <= 0) {
				alert("Player Win!!!!");
				this.endGame();
				return;
			}

			//player
			maxDamage = 10;
			minDamage = 5;
			damage = Math.max(Math.floor(Math.random()*maxDamage)+1, minDamage);
			this.playerH -= damage;

			if (this.playerH <= 0) {
				alert("Monster Win!!!!");
				this.endGame();
			}
		},
		endGame: function() {
			this.starGame=false;
			this.playerH=0;
			this.monsterH=0;
		}
	}
});