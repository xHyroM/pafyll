import test from "ava";
import { exposeGlobal } from "../dist/index.js";

test("exposeGlobal(name, value) - something()", (t) => {
    exposeGlobal("something", () => "something");

    t.is(something(), "something");
});

test("exposeGlobal(value) - testSomething()", (t) => {
    const value = { testSomething: () => "testSomething" };
    exposeGlobal(value);

    t.is(testSomething(), "testSomething");
});
