class Frog {

  // model from: https://sketchfab.com/3d-models/poison-dart-frog-97142ccef8c74650b34e0547b2812c2b
  // Available under the CC License. No changes made.

  constructor(scene, x, y, z) {
    this.scene = scene;

    // var geo = new THREE.BoxBufferGeometry(50, 50, 50);
    // var mat = new THREE.MeshLambertMaterial( { color: 0x0B6623 } );
    // this.mesh = new THREE.Mesh(geo, mat);
    // this.setLocation(x, y, z);
    // scene.add(this.mesh);

    this.load_example();
  }

  load_example() {
    // loading from example at: https://threejs.org/docs/#examples/loaders/GLTFLoader
    // Instantiate a loader
    var loader = new THREE.GLTFLoader();

    // Load a glTF resource
    loader.load(
      // resource URL
      'models/gltf/poison_dart_frog/scene.gltf',
      // called when the resource is loaded
      function ( gltf ) {

        scene.add( gltf.scene );

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

      },
      // called while loading is progressing
      function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

      },
      // called when loading has errors
      function ( error ) {

        console.log( 'An error happened' );

      }
    );
  }

  moveBy(x, y, z) {
    // TODO: move by distance
    // TODO: animate movement
  }

  setLocation(x, y, z) {
    // this.mesh.position.set(x, y, z);
    // TODO: move base of item to ground level
    // TODO: move object to location
  }

  // TODO: add collision detection

} // end Frog class
