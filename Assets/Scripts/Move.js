#pragma strict

var targetPosition : Vector2;
var grid : Grid;

function Start () {
  var seed = "hej";
  Random.seed = seed.GetHashCode();
  grid = gameObject.GetComponent("Grid");
}

function Update () {
  if (Input.GetMouseButton(0)) {
    var worldPoint = Camera.main.ScreenToWorldPoint(Input.mousePosition);
    var axial = grid.worldPointToAxial(worldPoint.x, worldPoint.y);
    targetPosition = grid.getCenterWorldPoint(axial);
    var dir = transform.position - targetPosition;
    var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;

    transform.rotation = Quaternion.AngleAxis(angle-270, Vector3.forward);
  }

  transform.position = Vector2.Lerp(transform.position, targetPosition, 0.1);
}
