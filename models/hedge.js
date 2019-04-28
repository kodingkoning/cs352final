class Hedge {
  constructor(scene, minX, minZ, maxX, maxZ, xSpace, zSpace) {
    this.scene = scene;
    this.border = [];

    for(var z = minZ; z < maxZ; z += zSpace) {
      this.border.push(new Border(scene, maxX, 0, z));
    }
    for(var z = minZ; z < maxZ; z += zSpace) {
      this.border.push(new Border(scene, minX, 0, z));
    }
    for(var x = minX; x < maxX; x += xSpace) {
      this.border.push(new Border(scene, x, 0, maxZ));
    }
    for(var x = minX; x < maxX; x += xSpace) {
      this.border.push(new Border(scene, x, 0, minZ));
    }

  }
}
