// a River is a collection of moving Logs
class River {
  constructor(scene, length, z, num_logs, offset, speed, minX, maxX) {
    this.speed = speed;
    this.num_logs = num_logs;
    this.logs = [];

    for(var i = 0; i < num_logs; i++) {
      var x = i*(maxX-minX)/num_logs + offset + minX;
      this.logs.push(new Log(scene, length, x, -24, z, minX, maxX, speed));
    }
  }

  move() {
    for(var i = 0; i < this.num_logs; i++) {
      this.logs[i].moveX(this.speed);
    }
  }
}
