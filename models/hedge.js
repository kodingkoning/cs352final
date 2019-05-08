class Hedge {
  constructor(scene, minX, minZ, maxX, maxZ, xSpace, zSpace, hedgeList) {
    this.scene = scene;
    this.border = [];

    for(var z = minZ; z < maxZ; z += zSpace) {
      this.border.push(new Border(scene, maxX, 0, z, minX, minZ, maxX, maxZ));
    }
    for(var z = minZ; z < maxZ; z += zSpace) {
      this.border.push(new Border(scene, minX, 0, z, minX, minZ, maxX, maxZ));
    }
    for(var x = minX; x < maxX; x += xSpace) {
      this.border.push(new Border(scene, x, 0, maxZ, minX, minZ, maxX, maxZ));
    }
    for(var x = minX; x < maxX; x += xSpace) {
      this.border.push(new Border(scene, x, 0, minZ, minX, minZ, maxX, maxZ));
    }

    for(var i = 0; i < this.border.length; i++) {
      hedgeList.push( this.border[i].mesh );
    }
  }
}
