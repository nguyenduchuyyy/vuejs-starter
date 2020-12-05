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
			var maxDamage = 20;
			var minDamage = 15;
			var damage = Math.max(Math.floor(Math.random()*maxDamage)+1, minDamage);
			this.monsterH -= damage;

			// if (this.monsterH <= 0) {
			// 	alert("Player Win!!!!");
			// 	this.endGame();
			// 	return;
			// }

			//player
			maxDamage = 20;
			minDamage = 15;
			damage = Math.max(Math.floor(Math.random()*maxDamage)+1, minDamage);
			this.playerH -= damage;

			this.checkHP(this.playerH ,this.monsterH );
			// if (this.playerH <= 0) {
			// 	alert("Monster Win!!!!");
			// 	// this.endGame();
			// }else if(this.monsterH <= 0){
			// 	alert("Player Win!!!!");
			// 	// this.endGame();
			// }
		},
		specialAttack: function() {
			//moster
			var maxDamage = 30;
			var minDamage = 25;
			var damage = Math.max(Math.floor(Math.random()*maxDamage)+1, minDamage);
			this.monsterH -= damage;
			//player
			maxDamage = 30;
			minDamage = 25;
			damage = Math.max(Math.floor(Math.random()*maxDamage)+1, minDamage);
			this.playerH -= damage;

			this.checkHP(this.playerH ,this.monsterH );
		},
		heal: function() {
			//player
			(this.playerH <= 100)?this.playerH+=10:this.playerH; 
			(this.playerH > 100)?this.playerH=100:this.playerH; 
		},
		checkHP: function(playerH,monsterH) {
			if (playerH <= 0 && playerH<monsterH) {
				alert("Monster Win!!!!");
				this.starGame=false;
				return;
			} else if(monsterH <= 0 && playerH>monsterH) {
				alert("Player Win!!!!");
				this.starGame=false;
				return;
			} else if(playerH==monsterH && playerH < 0 && monsterH < 0 || (playerH==0 && monsterH==0)) {
				alert("Draw!!!!");
				this.starGame=false;
				return;

			}
		},
		endGame: function() {
			this.starGame=false;
			this.playerH=0;
			this.monsterH=0;
		},
		playerAttack: function() {
			var maxDamage = 20;
			var minDamage = 15;
			var damage = Math.max(Math.floor(Math.random()*maxDamage)+1, minDamage);
			this.monsterH -= damage;
			this.checkHP(this.playerH ,this.monsterH );
		},
		monsterAttack: function() {
			var maxDamage = 20;
			var minDamage = 15;
			var damage = Math.max(Math.floor(Math.random()*maxDamage)+1, minDamage);
			this.playerH -= damage;
			this.checkHP(this.playerH ,this.monsterH );
		}

	}
});