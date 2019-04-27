class Log {
  constructor(scene, length, x, y, z) {
    this.scene = scene;

    // TODO: create log model
    var geo = new THREE.BoxBufferGeometry(length, 50, 50);
    var mat = new THREE.MeshLambertMaterial( { color: 0x654321 } );
    this.mesh = new THREE.Mesh(geo, mat);
    this.setLocation(x, y, z);
    scene.add(this.mesh);
  }

  moveBy(x, y, z) {
    var x_coord = this.mesh.position.x;
    var y_coord = this.mesh.position.y;
    var z_coord = this.mesh.position.z;
    this.setLocation(x+x_coord, y+y_coord, z+z_coord);
    this.xpos = this.mesh.position.x;
    this.ypos = this.mesh.position.y;
    this.zpos = this.mesh.position.z;
    // TODO: animate movement
  }

  setLocation(x, y, z) {
    this.mesh.position.set(x, y, z);
    this.xpos = this.mesh.position.x;
    this.ypos = this.mesh.position.y;
    this.zpos = this.mesh.position.z;
    // TODO: move base of item to ground level
  }

  // TODO: add collision detection

} // end Log class
