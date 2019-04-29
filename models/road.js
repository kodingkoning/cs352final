// a Road is a colletion of moving Cars
class Road {
  constructor(scene, length, z, num_cars, speed, minX, maxX) {
    this.speed = speed;
    this.num_cars = num_cars;
    this.cars = [];

    for(var i = 0; i < num_cars; i++) {
      var x = i*(maxX-minX)/num_cars + minX;
      this.cars.push(new Car(scene, length, x, 0, z, minX, maxX, speed));
    }
  }

  move() {
    for(var i = 0; i < this.num_cars; i++) {
      this.cars[i].moveX(this.speed);
    }
  }
}
