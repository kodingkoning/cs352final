class Finish {
    constructor(scene, x, y, z) {
      this.scene = scene;
  
      // TODO: create shrub/grass model
      // idea - make them varying images
      var geo = new THREE.CylinderGeometry( 50, 50, 50, 50 );
      var mat = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
      this.mesh = new THREE.Mesh(geo, mat);
      this.setLocation(x, y, z);
      scene.add(this.mesh);
    }
  
    setLocation(x, y, z) {
      this.mesh.position.set(x, y, z);
      this.mesh.xpos = this.mesh.position.x;
      this.mesh.ypos = this.mesh.position.y;
      this.mesh.zpos = this.mesh.position.z;
    }
  } // end Border class