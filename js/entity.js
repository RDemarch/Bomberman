class Entity {
  constructor(x, y) {
    this.element = document.createElement("div");
    this.style = this.element.style;
    box.appendChild(this.element);
    this.setX(x);
    this.setY(y);
  }
  getX = function(){
    return this.x;
  }
  getY = function(){
    return this.y;
  }
  getElement = function(){
    return this.element;
  }
  setX = function(x){
    this.x = x;
    this.style.left = String(x * 40) + 'px';
  }
  setY = function(y){
    this.y = y;
    this.style.top = String(y * 40) + 'px';
  }
  remove = function(){
    this.element.remove();
  }
}
