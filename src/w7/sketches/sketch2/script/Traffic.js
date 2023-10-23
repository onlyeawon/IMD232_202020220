class Traffic {
  constructor() {
    this.vehicles = [];
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      let sepForce = eachVehicle.separate(this.Vehicle);
      eachVehicle.update();
      eachVehicle.borderInfintite();
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    this.vehicles.push(
      new Vehicle(x, y, 8, 5, 0, 1, color(random(360), 100, 50))
    );
  }
}
