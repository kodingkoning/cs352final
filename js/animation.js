///////////////////////////
// The names of the 3D models to load. One-per file.
// A model may have multiple SkinnedMesh objects as well as several rigs (armatures). Units will define which
// meshes, armatures and animations to use. We will load the whole scene for each object and clone it for each unit.
// Models are from https://www.mixamo.com/
var MODELS = [
  { name: "Parrot" },
  // { name: "" },
];
// Here we define instances of the models that we want to place in the scene, their position, scale and the animations
// that must be played.
var UNITS = [
  {
    modelName: "Parrot",
    meshName: "mesh_0",
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: Math.PI, z: 0 },
    scale: 1,
    animationName: "parrot_A_"
  },
];

/**
 * Function that starts loading process for the next model in the queue. The loading process is
 * asynchronous: it happens "in the background". Therefore we don't load all the models at once. We load one,
 * wait until it is done, then load the next one. When all models are loaded, we call loadUnits().
 */
function loadModels() {
  for ( var i = 0; i < MODELS.length; ++ i ) {
    var m = MODELS[ i ];
    loadGltfModel( m, function ( model ) {
      ++ numLoadedModels;
      if ( numLoadedModels === MODELS.length ) {
        console.log( "All models loaded, time to instantiate units..." );
        instantiateUnits();
      }
    } );
  }
}
/**
 * Look at UNITS configuration, clone necessary 3D model scenes, place the armatures and meshes in the scene and
 * launch necessary animations
 */
function instantiateUnits() {
  var numSuccess = 0;
  for ( var i = 0; i < UNITS.length; ++ i ) {
    var u = UNITS[ i ];
    var model = getModelByName( u.modelName );
    if ( model ) {
      var clonedScene = THREE.SkeletonUtils.clone( model.scene );
      if ( clonedScene ) {
        // Scene is cloned properly, let's find one mesh and launch animation for it
        var clonedMesh = clonedScene.getObjectByName( u.meshName );
        if ( clonedMesh ) {
          var mixer = startAnimation( clonedMesh, model.animations, u.animationName );
          if ( mixer ) {
            // Save the animation mixer in the list, will need it in the animation loop
            mixers.push( mixer );
            numSuccess ++;
          }
        }
        // Different models can have different configurations of armatures and meshes. Therefore,
        // We can't set position, scale or rotation to individual mesh objects. Instead we set
        // it to the whole cloned scene and then add the whole scene to the game world
        // Note: this may have weird effects if you have lights or other items in the GLTF file's scene!
        scene.add( clonedScene );
        if ( u.position ) {
          clonedScene.position.set( u.position.x, u.position.y, u.position.z );
        }
        if ( u.scale ) {
          clonedScene.scale.set( u.scale, u.scale, u.scale );
        }
        if ( u.rotation ) {
          clonedScene.rotation.x = u.rotation.x;
          clonedScene.rotation.y = u.rotation.y;
          clonedScene.rotation.z = u.rotation.z;
        }
            }
    } else {
      console.error( "Can not find model", u.modelName );
    }
  }
  console.log( `Successfully instantiated ${numSuccess} units` );
}
/**
 * Start animation for a specific mesh object. Find the animation by name in the 3D model's animation array
 * @param skinnedMesh {THREE.SkinnedMesh} The mesh to animate
 * @param animations {Array} Array containing all the animations for this model
 * @param animationName {string} Name of the animation to launch
 * @return {THREE.AnimationMixer} Mixer to be used in the render loop
 */
function startAnimation( skinnedMesh, animations, animationName ) {
  var mixer = new THREE.AnimationMixer( skinnedMesh );
  var clip = THREE.AnimationClip.findByName( animations, animationName );
  if ( clip ) {
    var action = mixer.clipAction( clip );
    action.play();
  }
  return mixer;
}
/**
 * Find a model object by name
 * @param name
 * @returns {object|null}
 */
function getModelByName( name ) {
  for ( var i = 0; i < MODELS.length; ++ i ) {
    if ( MODELS[ i ].name === name ) {
      return MODELS[ i ];
    }
  }
  return null;
}
/**
 * Load a 3D model from a GLTF file. Use the GLTFLoader.
 * @param model {object} Model config, one item from the MODELS array. It will be updated inside the function!
 * @param onLoaded {function} A callback function that will be called when the model is loaded
 */
function loadGltfModel( model, onLoaded ) {
  var loader = new THREE.GLTFLoader();
  var modelName = "models/gltf/" + model.name + ".glb";
  loader.load( modelName, function ( gltf ) {
    var scene = gltf.scene;
    model.animations = gltf.animations;
    model.scene = scene;
    // Enable Shadows
    gltf.scene.traverse( function ( object ) {
      if ( object.isMesh ) {
        object.castShadow = true;
      }
    } );
    console.log( "Done loading model", model.name );
    onLoaded( model );
  } );
}
