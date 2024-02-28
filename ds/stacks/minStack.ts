class MinStack {
  stack: Array<number>;
  min: number | undefined;

  constructor() {
    this.stack = [];
    this.min = undefined;
  }

  push(val: number): void {
    if (this.min === undefined || val < this.min) {
      this.min = val;
    }
    this.stack.push(val);
  }

  pop(): void {
    const popped = this.stack.pop();
    if (popped === this.min) {
      this.min = Math.min(...this.stack);
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min!;
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
console.log(minStack.pop());
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
