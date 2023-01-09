import test from "ava";
import { exposeObject } from "../dist/index.js";

test("exposeObject(object, name, value) - Array.prototype.something()", (t) => {
    exposeObject(Array, "something", () => "something");

    t.is([].something(), "something");
});

test("exposeObject(object, value) - Array.prototype.testSomething()", (t) => {
    const value = { testSomething: () => "testSomething" };
    exposeObject(Array, value);

    t.is([].testSomething(), "testSomething");
});
