#pragma strict

var tileSize    : float = 0.5;
var tileSpacing : float = 0.1;
var tilePointy  : boolean = false;

function getCenterWorldPoint (axial : Axial) : Vector2 {
  var x : float;
  var y : float;
  var q : float = axial.q;
  var r : float = axial.r;

  if (this.tilePointy) {
    x = (this.tileSize + this.tileSpacing) * Mathf.Sqrt(3.0) * (q + r / 2.0);
    y = -((this.tileSize + this.tileSpacing) * 3.0/2.0 * r);
  } else {
    x = (this.tileSize + this.tileSpacing) * 3.0/2.0 * q;
    y = -((this.tileSize + this.tileSpacing) * Mathf.Sqrt(3.0) * (r + q / 2.0));
  }

  return Vector2(x, y);
};

function worldPointToAxial (x : float, y : float) : Axial {
  var axial = worldPointToAxialDecimal(x, y);
  var cube = axial.toCube();
  var roundedCube = cube.round();

  return Axial(roundedCube.x, roundedCube.y);
};

function worldPointToAxialDecimal (x : float, y : float) : Axial {
  var q : float;
  var r : float;

  if (this.tilePointy) {
    q = (1.0/3.0 * Mathf.Sqrt(3.0) * x - 1.0/3.0 * -y) / (this.tileSize + this.tileSpacing);
    r = 2.0/3.0 * -y / (this.tileSize + this.tileSpacing);
  } else {
    q = 2.0/3.0 * x / (this.tileSize + this.tileSpacing);
    r = (1.0/3.0 * Mathf.Sqrt(3.0) * -y - 1.0/3.0 * x) / (this.tileSize + this.tileSpacing);
  }

  return Axial(q, r);
};
