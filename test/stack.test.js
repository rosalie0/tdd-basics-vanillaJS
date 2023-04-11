// This is the code we are testing.
// We are to make a Stack ADT without using arrays.
class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
}

// This is a test suite.
describe("My Stack", () => {
  // This is a singular test in this suite, with the string being a description of it.
  // The 2nd arg is the function it runs.
  // You can write it.todo if you've not written the test yet.

  it("is created empty", () => {
    const stack = new Stack();
    // We are 'expecting' the top of an initialized stack to be -1.
    expect(stack.top).toBe(-1);
  });

  it.todo("can push onto the top");

  it.todo("can pop off from the top");
});
