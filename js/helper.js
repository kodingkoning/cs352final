load_example = function(url, parent) {
  // loading adapted from example at: https://threejs.org/docs/#examples/loaders/GLTFLoader
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
