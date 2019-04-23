class Frog {
  constructor(scene, x, y, z) {
    this.scene = scene;

    // TODO: create frog model
    var geo = new THREE.BoxBufferGeometry(50, 50, 50);
    var mat = new THREE.MeshLambertMaterial( { color: 0x0B6623 } );
    this.mesh = new THREE.Mesh(geo, mat);
    this.setLocation(x, y, z);
    scene.add(this.mesh);
  }

  moveBy(x, y, z) {
    // TODO: move by distance
    // TODO: animate movement
  }

  setLocation(x, y, z) {
    this.mesh.position.set(x, y, z);
    // TODO: move base of item to ground level
  }

  // TODO: add collision detection

} // end Frog class
