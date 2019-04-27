class Frog {
  // model from: https://sketchfab.com/3d-models/poison-dart-frog-97142ccef8c74650b34e0547b2812c2b
  // Available under the CC License. No changes made.

  constructor(scene, x, y, z) {
    this.scene = scene;

    // frog model is a child of this mesh. It moves with the mesh.
    // fix to make frog mobile from: https://discourse.threejs.org/t/how-to-move-car-obj-file-on-map-solved/1173
    var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( );
    this.mesh = new THREE.Mesh( geometry, material );
    scene.add( this.mesh );
    this.mesh.rotateY(Math.PI); // make frog face forwards

    this.load_example('models/gltf/poison_dart_frog/scene.gltf', this.mesh);
    this.setLocation(x, y, z);
  }

  load_example(url, parent) {
    // loading from example at: https://threejs.org/docs/#examples/loaders/GLTFLoader
    // Instantiate a loader
    var loader = new THREE.GLTFLoader();

    // Load a glTF resource
    loader.load(
      // resource URL
      url,
      // called when the resource is loaded
      function ( gltf ) {

        gltf.scene.position.set(-43, 0, 255);
        scene.add( gltf.scene );
        parent.add(gltf.scene);
      }
    );

  }

  moveBy(x, y, z) {
    // TODO: animate movement

    var x_coord = this.mesh.position.x;
    var y_coord = this.mesh.position.y;
    var z_coord = this.mesh.position.z;
    this.setLocation(x+x_coord, y+y_coord, z+z_coord);
  }

  setLocation(x, y, z) {
    this.mesh.position.set(x, y, z);
  }

  setRotation(angle) {
    // rotates around the center of the frog
    this.mesh.rotation.y = angle;
  }

  // TODO: add collision detection

} // end Frog class
