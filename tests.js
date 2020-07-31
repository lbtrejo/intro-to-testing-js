// Unit tests for the helloWorld function

const randomBoolean = Boolean(Math.round(Math.random()))

describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, World!' with no input", function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' with boolean input", function () {
        expect(sayHello(randomBoolean)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' with 'null' input", function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' with an empty string '' input", function () {
        expect(sayHello('')).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' with a number input", function () {
        expect(sayHello(5)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' with a string numeral input", function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it("should return 'Hello, Jane!' with the input of 'Jane'", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!' with the input of 'Alex'", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!' with the input of 'Pat'", function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});

// Unit tests for the isFive function
describe('isFive', function () {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean value", function () {
        expect(typeof isFive()).toBe("boolean");
    })
    it("should return true when passed a value of 5", function() {
        expect(isFive(5)).toBe(true);
    });
    it("should return true when passed a value of '5'", function() {
        expect(isFive("5")).toBe(true);
    });
    it("should return false for any other value passed", function() {
        expect(isFive(4)).toBe(false);
        expect(isFive(null)).toBe(false);
        expect(isFive("undefined")).toBe(false);
        expect(isFive([5])).toBe(false);
    })
});