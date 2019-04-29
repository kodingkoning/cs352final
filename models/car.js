// model from: https://sketchfab.com/3d-models/handpainted-truck-124392d37fd047aea2c5cf61f9dd7750
// Available under the Create Commons license. No modifications made.
class Car {
  constructor(scene, length, x, y, z, minX, maxX) {
    this.scene = scene;
    this.action = null; // for list of animations from the gltf model

    // TODO: create car model for all lengths of cars (possibly specify in constructor)

    if (length == 100) {
      // truck
      this.mesh = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshBasicMaterial());
      var scale_num = 0.054;
      var offset = [50, 3, 0];
      var scale = [scale_num, scale_num, scale_num];
      var rotation = [0, Math.PI/2, 0]; //TODO: set based on direction of movement
      load_example('models/gltf/handpainted_truck/scene.gltf', this.mesh, offset, scale, rotation, true);
      this.mesh.material = new THREE.MeshLambertMaterial( {color: 0x000000 } );
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
