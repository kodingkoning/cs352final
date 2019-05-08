class Border {
  constructor(scene, x, y, z, minX, minZ, maxX, maxZ) {
    this.scene = scene;

    // TODO: create shrub/grass model
    // idea - make them varying images
    var loader = new THREE.TextureLoader();
    var ivyTexture = loader.load( 'images/ivy1.jpg' );
    ivyTexture.wrapS = ivyTexture.wrapT = THREE.RepeatWrapping;
    ivyTexture.repeat.set( 0.6, 1 );
    ivyTexture.anisotropy = 16;

    var geo = new THREE.BoxBufferGeometry(70, 400, 50);
    var mat = new THREE.MeshLambertMaterial( { map: ivyTexture } );
    this.mesh = new THREE.Mesh(geo, mat);
    this.setLocation(x, y, z);
    if (this.mesh.position.x == maxX) {
      this.mesh.side = "Right";
    } else if (this.mesh.position.x == minX) {
      this.mesh.side = "Left";
    } else if (this.mesh.position.z == maxZ) {
      this.mesh.side = "Up";
    } else if (this.mesh.position.z == minZ) {
      this.mesh.side = "Down";
    }
    scene.add(this.mesh);
  }

  setLocation(x, y, z) {
    this.mesh.position.set(x, y, z);
  }

  // TODO: add collision detection (for stopping)

} // end Border class
