type Point = {
  x: number;
  y: number;
};

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;
function distance(
  a: number | Point,
  b: number | Point,
  c?: number,
  d?: number
): number {
  let x1: number;
  let y1: number;
  let x2: number;
  let y2: number;

  if (
    typeof a === "number" &&
    typeof b === "number" &&
    typeof c === "number" &&
    typeof d === "number"
  ) {
    x1 = a;
    y1 = b;
    x2 = c;
    y2 = d;
  } else if (
    typeof a !== "number" &&
    typeof b !== "number" &&
    c === undefined &&
    d === undefined
  ) {
    x1 = a.x;
    y1 = a.y;
    x2 = b.x;
    y2 = b.y;
  } else {
    throw new Error("Invalid arguments");
  }

  const dx: number = x2 - x1;
  const dy: number = y2 - y1;

  return Math.sqrt(dx * dx + dy * dy);
}

console.log(distance(0, 0, 3, 4));
console.log(distance({ x: 0, y: 0 }, { x: 3, y: 4 }));