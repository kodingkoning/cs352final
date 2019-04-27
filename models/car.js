class Car {
  constructor(scene, x, y, z) {
    this.scene = scene;

    // TODO: create car model
    var car_geo = new THREE.BoxBufferGeometry(50, 50, 50);
    var car_mat = new THREE.MeshLambertMaterial();
    this.car_mesh = new THREE.Mesh(car_geo, car_mat);
    this.xpos = x;
    this.ypos = y;
    this.zpos = z;
    this.setLocation(x, y, z);
    scene.add(this.car_mesh);
  }

  moveBy(x, y, z) {
    var x_coord = this.car_mesh.position.x;
    var y_coord = this.car_mesh.position.y;
    var z_coord = this.car_mesh.position.z;
    this.setLocation(x+x_coord, y+y_coord, z+z_coord);
    this.xpos = this.car_mesh.position.x;
    this.ypos = this.car_mesh.position.y;
    this.zpos = this.car_mesh.position.z;

    // TODO: animate movement
  }

  setLocation(x, y, z) {
    this.car_mesh.position.set(x, y, z);
    this.xpos = this.car_mesh.position.x;
    this.ypos = this.car_mesh.position.y;
    this.zpos = this.car_mesh.position.z;
    // TODO: move base of item to ground level
  }

  // TODO: add collision detection

} // end Car class
