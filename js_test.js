class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
  set carname(x) {
    this._carname = x;
  }
  get carname() {
    return this._carname;
  }
}
  
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
  set model(x) {
    this._model = x;
  }
  get model() {
    return this._model;
  }
}

tracker = 0;

function action() {
  if (tracker % 2 == 0) {
    tracker++;
    mycar = new Model("Ford", "Mustang");
    document.getElementById("function").innerHTML = "The function " + mycar.present + " is used";
    document.getElementById("result").innerHTML= "The result is " + mycar.present();
  }
  else {
    tracker++;
    document.getElementById("function").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}