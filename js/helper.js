load_example = function(url, parent, offset, scale, rotation, act) {
  // loading adapted from example at: https://threejs.org/docs/#examples/loaders/GLTFLoader
  // Instantiate a loader
  var loader = new THREE.GLTFLoader();

  // Load a glTF resource
  loader.load(
    // resource URL
    url,
    // called when the resource is loaded
    function ( gltf ) {
      gltf.scene.position.set(offset[0], offset[1], offset[2]);
      gltf.scene.scale.set(scale[0], scale[1], scale[2]);
      gltf.scene.rotation.set(rotation[0], rotation[1], rotation[2]);
      scene.add( gltf.scene );
      parent.add(gltf.scene);
      parent.material.visible = false;

      // TODO: make animation work
      // if (act) {
      //   mixer = new THREE.AnimationMixer( gltf.scene );
      //   // just looks at the first action
      //   var action = mixer.clipAction(gltf.animations[0]);
      //   action.setDuration(1);
      //   var time = action.time;
      //   action.play();
      // }
    }
  );
}

load_collada = function(url, parent, offset, scale, rotation) {
  var loader = new THREE.ColladaLoader();
  loader.load(url, function(collada) {
    collada.scene.position.set(offset[0], offset[1], offset[2]);
    collada.scene.scale.set(scale[0], scale[1], scale[2]);
    collada.scene.rotation.set(rotation[0], rotation[1], rotation[2]);
    scene.add(collada.scene);
    parent.add(collada.scene);
    // parent.material.visible = false; //TODO: activate
  });
}
