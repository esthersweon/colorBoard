(function(root){
	var colorBoard = root.colorBoard = (root.colorBoard || {});

	var Tile = colorBoard.Tile = function(row, col){
		this.row = row;
		this.col = col;

		this.classLabel = document.createElement('div');
		this.classLabel.setAttribute('class', 'tile');
	};

})(this);