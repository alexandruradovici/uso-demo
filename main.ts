// function adds two numbers
export function add(a: number, b: number): number {
  return a + b;
}

// function subtracts two numbers
export function sub(a: number, b: number): number {
  return a - b;
}

// function divides two numbers
export function div(a: number, b: number): number {
  return a / b;
}

// function divides two integer numbers
export function intDiv(a: number, b: number): number {
  if (b == 0) {
    throw "divisomn by 0";
  } else {
    return Math.floor(a / b);
  }
}
