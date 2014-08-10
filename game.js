(function(root){
	var colorBoard = root.colorBoard = (root.colorBoard || {});

	var Game = colorBoard.Game = function(height, width){
		this.board = new colorBoard.Board(height, width);
	};

	Game.prototype.createBoard = function(height, width){
		var rows = new Array(height);

		for (var a = 0; a < height; a++){
			rows[a] = new Array(width);
			for (var b = 0; b < rows[a].length; b++){
				rows[a][b] = new colorBoard.Tile(a, b);
			}
		}

		return rows;
	};

	Game.prototype.displayBoard = function(){
		var container = document.getElementById('boardContainer');

		for (var a = 0; a < this.length; a++){
			var row = this.tiles[a];
			for (var b = 0; b<this[a].length; b++){
				container.appendChild(row[b].classLabel);
			}
		}
	}
})(this);