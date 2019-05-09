// model from: https://sketchfab.com/3d-models/handpainted-truck-124392d37fd047aea2c5cf61f9dd7750
// Available under the Create Commons license. No modifications made.
class Car {
  constructor(scene, length, x, y, z, minX, maxX, speed) {
    this.scene = scene;
    this.speed = speed;
    this.action = null; // for list of animations from the gltf model

    // TODO: create car model for all lengths of cars (possibly specify in constructor)

    if (length == 100) {
      // truck
      var geo = new THREE.BoxGeometry(length, 50, 50);
      var mat = new THREE.MeshBasicMaterial();
      this.mesh = new THREE.Mesh(geo, mat);

      var coords = {};
      var rot = {};
      if(speed < 0) {
        coords = { x: -50, y: 3, z: 0 };
        rot = { x: 0, y: 3*Math.PI/2, z: 0 };
      } else {
        coords = { x: 50, y: 3, z: 0 };
        rot = { x: 0, y: Math.PI/2, z: 0 };
      }
      this.loadTruck( coords , rot, this.mesh );
    } else {
      // often of length 50
      var geo = new THREE.BoxGeometry(length, 50, 50);
      var mat = new THREE.MeshLambertMaterial();
      this.mesh = new THREE.Mesh(geo, mat);
    }

    this.setLocation(x, y, z);
    this.xpos = x;
    this.ypos = y;
    this.zpos = z;
    this.minX = minX;
    this.maxX = maxX;
    scene.add(this.mesh);
  }

  loadTruck(pos, rot, mesh) {
    // TODO: load truck
    var unit =   {
        modelName: "Truck",
        meshName: "RootNode_(gltf_orientation_matrix)",
        position: pos,
        rotation: rot,
        scale: 0.059,
        animationName: "CINEMA_4D_Main"
      };
    var model = {
      name: "Truck",
      fileType: ".glb"
    };
    loadModel(model, unit, mesh);
    // instantiateUnit(unit, model);
  }

  moveBy(x, y, z) {
    var x_coord = this.mesh.position.x;
    var y_coord = this.mesh.position.y;
    var z_coord = this.mesh.position.z;
    this.setLocation(x+x_coord, y+y_coord, z+z_coord);
    this.xpos = this.mesh.position.x;
    this.ypos = this.mesh.position.y;
    this.zpos = this.mesh.position.z;

    // TODO: animate movement
  }

  moveX(x) {
    if(this.mesh.position.x < this.minX) {
      this.mesh.position.x = 1000;
    }
    if(this.mesh.position.x > this.maxX) {
      this.mesh.position.x = -1000;
    }
    this.mesh.translateX(x);
  }

  setLocation(x, y, z) {
    this.mesh.position.set(x, y, z);
    this.xpos = this.mesh.position.x;
    this.ypos = this.mesh.position.y;
    this.zpos = this.mesh.position.z;
    // TODO: move base of item to ground level
  }

  // TODO: add collision detection

} // end Car class
