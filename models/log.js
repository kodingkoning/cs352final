class Log {
  constructor(scene, length, x, y, z, minX, maxX, speed) {
    this.scene = scene;

    var geo = new THREE.BoxGeometry(length, 50, 50);
    var mat = new THREE.MeshLambertMaterial( { color: 0x654321 } );
    this.mesh = new THREE.Mesh(geo, mat);
    this.setLocation(x, y, z);
    this.xpos = x;
    this.ypos = y;
    this.zpos = z;
    this.mesh.movement = speed;
    scene.add(this.mesh);

    // use collada log file and scale for length
    var scale_num = 1;
    var length_scale = 2.5/100 * length;
    var offset = [0, 20, 0];
    var scale = [length_scale*scale_num, scale_num, scale_num]; //TODO: scale properly
    var rotation = [-Math.PI/2, 0, 0];
    // Use custom made log model
    load_collada('models/collada/Log.dae', this.mesh, offset, scale, rotation);

    this.minX = minX;
    this.maxX = maxX;
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

} // end Log class
