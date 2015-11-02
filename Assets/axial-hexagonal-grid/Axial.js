#pragma strict

class Axial {
  var q : float;
  var r : float;

  function Axial (q : float, r : float) {
    this.q = q;
    this.r = r;
  }

  function toCube () : Cube {
    return Cube(this.q, this.r, -this.q-this.r);
  };
}
