
class NodeOto extends RedT.Node {
	constructor() {
		super();

		this.addComponent(new RedT.Sprite(RedT.decorator.resources['spriteOto']));
		this.x       = 550;
		this.y       = 300;
		this.scaleX  = 0.8;
		this.scaleY  = 0.8;

		this.speed     = 5;
		this.ctrlSpeed = 15;

		this.huongDi = 'right';
	}

	onEnable(){
		this.on('keydown', this.otoMove, this);
	};

	onDisable(){
		this.off('keydown', this.otoMove, this);
	};

	// Cập nhật trạng thái khi nhấn
	otoMove(e){
		let keyCode = e.keyCode;
		let huongDi = '';
		let ctrl    = e.ctrlKey;
		if (keyCode === 38 || keyCode === 87) {
			huongDi = 'top';
		}else if (keyCode === 65 || keyCode === 37){
			huongDi = 'left';
		}else if (keyCode === 83 || keyCode === 40){
			huongDi = 'bottom';
		}else if (keyCode === 68 || keyCode === 39){
			huongDi = 'right';
		}

		if (huongDi.length > 2) {
			if (this.huongDi !== huongDi) {
				// quay xe
				this.quayXe(huongDi);
			}else{
				// di chuyển
				this.diChuyen(this.huongDi, ctrl);
			}
		}
	}

	// Quay xe
	quayXe(huongDi){
		this.huongDi = huongDi;
		switch(huongDi){
			case 'top':
				this.rotation = -90;
				break;
			case 'left':
				this.rotation = 180;
				break;
			case 'bottom':
				this.rotation = 90;
				break;
			case 'right':
				this.rotation = 1;
				break;
		}
	}

	// di chuyển xe
	diChuyen(huongDi, ctrl){
		let speed = ctrl ? this.ctrlSpeed : this.speed;
		switch(huongDi){
			case 'top':
				this.y -= speed;
				break;
			case 'left':
				this.x -= speed;
				break;
			case 'bottom':
				this.y += speed;
				break;
			case 'right':
				this.x += speed;
				break;
		}
	}
}
