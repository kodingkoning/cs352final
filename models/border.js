class Border {
  constructor(scene, x, y, z) {
    this.scene = scene;

    // TODO: create shrub/grass model
    // idea - make them varying images
    var geo = new THREE.BoxBufferGeometry(50, 400, 50);
    var mat = new THREE.MeshLambertMaterial( { color: 0x0B6623 } );
    this.mesh = new THREE.Mesh(geo, mat);
    this.setLocation(x, y, z);
    scene.add(this.mesh);
  }

  setLocation(x, y, z) {
    this.mesh.position.set(x, y, z);
  }

  // TODO: add collision detection (for stopping)

} // end Border class
