// This is the code we are testing.
// We are to make a Stack ADT without using arrays.
class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(element) {
    this.top++;
    this.items[this.top] = element;
  }
}

// This is a test suite.
describe("My Stack", () => {
  // Write code that all these tests have scope into.
  let stack;
  beforeEach(() => {
    // re-initialize stack to an empty stack before each test.
    // reduces the amount of dupe code.
    stack = new Stack();
  });

  // This is a singular test in this suite, with the string being a description of it.
  // The 2nd arg is the function it runs.
  // You can write it.todo if you've not written the test yet.
  it("is created empty", () => {
    // We are 'expecting' the top of an initialized stack to be -1.
    expect(stack.top).toBe(-1);
    /*      expect(stack.top).toBe({})
    ^ This fails because .toBe checks their memory addresses.
    Instead of 'toBe' we want to use toEqual. */
    expect(stack.items).toEqual({});
  });

  it("can push onto the top", () => {
    stack.push("avocado");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("avocado");
  });

  it.todo("can pop off from the top");
});
