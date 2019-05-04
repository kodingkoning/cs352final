class Frog {
  // model from: https://sketchfab.com/3d-models/poison-dart-frog-97142ccef8c74650b34e0547b2812c2b
  // Available under the CC License. No changes made.

  constructor(scene, x, y, z) {
    this.scene = scene;

    // frog model is a child of this mesh. It moves with the mesh.
    // fix to make frog mobile from: https://discourse.threejs.org/t/how-to-move-car-obj-file-on-map-solved/1173
    var geometry = new THREE.BoxGeometry( 20, 60, 20 );
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

  setY(y) {
    this.mesh.position.set(this.mesh.position.x, y, this.mesh.position.z);
    this.ypos = y;
  }

  setRotation(angle) {
    // rotates around the center of the frog
    this.mesh.rotation.z = angle;
  }

  // sets the vertical coordinate of the frog in relation to the mesh
  jump(height) {
    var angle = 0;
    if( isNaN(height) ) {
      // treat it as an object with a position
      var z = height.position.z - this.zpos;
      height = Math.sqrt(18*18 - z*z) + 2;
      angle = Math.atan(height, z);
      if(isNaN(angle)) {
        angle = 0;
      }
      if(isNaN(height)) {
        height = 0;
      }
    }

    var children = this.mesh.children;
    for(var i = 0; i < children.length; i++) {
      if(children[i].type == "Scene") {
        this.mesh.children[i].position.y = height;
      }
    }
  }

} // end Frog class
