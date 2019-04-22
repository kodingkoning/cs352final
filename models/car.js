class Car {
  constructor(scene, x, y, z) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.z = z;

    // TODO: create car model
    var car_geo = new THREE.BoxBufferGeometry(50, 50, 50);
    var car_mat = new THREE.MeshLambertMaterial();
    this.car_mesh = new THREE.Mesh(car_geo, car_mat);
    this.car_mesh.position.x = x;
    this.car_mesh.position.y = y;
    this.car_mesh.position.z = z;
    // this.car_mesh.position = new THREE.Vector3(x, y, z);
    scene.add(this.car_mesh);
  }

  moveBy(x, y, z) {
    // TODO: move by distance
  }

  setLocation(x, y, z) {
    // TODO: move to location
  }

  // TODO: add movement/animation

} // end Car class
