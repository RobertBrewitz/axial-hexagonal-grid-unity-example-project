#pragma strict

class Cube {
  var x : float;
  var y : float;
  var z : float;

  function Cube (x : float, y : float, z : float) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  function round () : Cube {
    var rx : float = Mathf.Round(this.x);
    var ry : float = Mathf.Round(this.y);
    var rz : float = Mathf.Round(this.z);
    var dx : float = Mathf.Abs(rx - this.x);
    var dy : float = Mathf.Abs(ry - this.y);
    var dz : float = Mathf.Abs(rz - this.z);

    if (dx > dy && dx > dz) {
      rx = -ry-rz;
    } else if (dy > dz) {
      ry = -rx-rz;
    } else {
      rz = -rx-ry;
    }

    return Cube(rx, ry, rz);
  }

  function toAxial () : Axial {
    return Axial(this.x, this.y);
  };
}
