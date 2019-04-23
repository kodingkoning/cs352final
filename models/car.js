class Car {
  constructor(scene, x, y, z) {
    this.scene = scene;

    // TODO: create car model
    var car_geo = new THREE.BoxBufferGeometry(50, 50, 50);
    var car_mat = new THREE.MeshLambertMaterial();
    this.car_mesh = new THREE.Mesh(car_geo, car_mat);
    this.setLocation(x, y, z);
    scene.add(this.car_mesh);
  }

  moveBy(x, y, z) {
    // TODO: move by distance
    // TODO: animate movement
  }

  setLocation(x, y, z) {
    this.car_mesh.position.set(x, y, z);
    // TODO: move base of item to ground level
  }

  // TODO: add collision detection

} // end Car class
