(function(root){
	var colorBoard = root.colorBoard = (root.colorBoard || {});

	var Board = colorBoard.Board = function(height, width){
		this.height = height;
		this.width = width;
		this.tiles = this.createBoard(height, width);
		this.displayBoard();
	};

	Board.prototype.createBoard = function(height, width){
		var rows = new Array(height);

		for (var a = 0; a < rows.length; a++){
			rows[a] = new Array(width);
			for (var b = 0; b < rows[a].length; b++){
				rows[a][b] = new colorBoard.Tile(a, b);
			}
		}
		
		return rows;
	};

	Board.prototype.displayBoard = function(){
		var container = document.getElementById('boardContainer');

		for (var a = 0; a < this.tiles.length; a++){
			var row = this.tiles[a];
			for (var b = 0; b<row.length; b++){
				container.appendChild(row[b].classLabel);
			}
			var endRow = document.createElement('div');
			endRow.setAttribute("class", "endRow");
			container.appendChild(endRow);
		}

	};

	Board.prototype.reset = function(){
		for (var a = 0; a < this.tiles.length; a++){
			var row = this.tiles[a];
			for (var b = 0; b < row.length; b++){
				row[b].classLabel.setAttribute('class', 'tile white');
			}
		}
	}
})(this);