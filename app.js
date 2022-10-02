class Button {
	constructor(root, counter) {
  	this.root = root;
    this.counter = counter;
    
    this.root.addEventListener('click', () => this.increment());
  }
  
  increment() {
  	this.counter.increment();
  }
}


class Counter {
	constructor() {
  	this.root = document.querySelector('[data-counter]');
    this.value = 0;
  }
  
  increment() {
  	this.value += 1;
    this.root.textContent = this.value;
  }
}


class Game {
	constructor() {
  	this.buttons = [];
    this.counter = new Counter();
    
    this.findButtonsOnScene();
  }
  
  findButtonsOnScene() {
  	const buttons = document.querySelectorAll('[data-button]');

    buttons.forEach(button => {
    	this.buttons.push(new Button(button, this.counter));
    });
  }
}

new Game();