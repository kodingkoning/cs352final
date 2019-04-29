class Frog {
  // model from: https://sketchfab.com/3d-models/poison-dart-frog-97142ccef8c74650b34e0547b2812c2b
  // Available under the CC License. No changes made.

  constructor(scene, x, y, z) {
    this.scene = scene;

    // frog model is a child of this mesh. It moves with the mesh.
    // fix to make frog mobile from: https://discourse.threejs.org/t/how-to-move-car-obj-file-on-map-solved/1173
    var geometry = new THREE.BoxGeometry( 20, 20, 20 );
    var material = new THREE.MeshBasicMaterial();
    this.mesh = new THREE.Mesh( geometry, material );
    scene.add( this.mesh );
    this.mesh.rotateY(Math.PI); // make frog face forwards

    var offset = [-43, 0, 255];
    var scale = [1, 1, 1];
    var rotation = [0, 0, 0];
    load_example('models/gltf/poison_dart_frog/scene.gltf', this.mesh, offset, scale, rotation);
    this.setLocation(x, y, z);
    this.xpos = this.mesh.position.x;
    this.ypos = this.mesh.position.y;
    this.zpos = this.mesh.position.z;
  }

  moveBy(x, y, z) {
    // TODO: animate movement

    var x_coord = this.mesh.position.x;
    var y_coord = this.mesh.position.y;
    var z_coord = this.mesh.position.z;
    this.setLocation(x+x_coord, y+y_coord, z+z_coord);
    this.xpos = this.mesh.position.x;
    this.ypos = this.mesh.position.y;
    this.zpos = this.mesh.position.z;
  }

  setLocation(x, y, z) {
    this.mesh.position.set(x, y, z);
    this.xpos = this.mesh.position.x;
    this.ypos = this.mesh.position.y;
    this.zpos = this.mesh.position.z;
  }

  setRotation(angle) {
    // rotates around the center of the frog
    this.mesh.rotation.y = angle;
  }

  // TODO: add collision detection

} // end Frog class
