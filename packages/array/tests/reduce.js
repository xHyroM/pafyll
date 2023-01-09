import test from "ava";
import deepEqual from "../../../helpers/deepEqual.js";
import { arrayReduce } from "../dist/reduce.js";

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

test("arrayReduce", (t) => {
    t.is(
        deepEqual(
            arrayReduce(
                inventory,
                (acc, { type }) => {
                    acc[type] = acc[type] || 0;
                    acc[type]++;
                    return acc;
                },
                {}
            ),
            { vegetables: 1, fruit: 2, meat: 2 }
        ),
        true
    );
});

test("Array.prototype.reduce()", (t) => {
    t.is(
        deepEqual(
            inventory.reduce((acc, { type }) => {
                acc[type] = acc[type] || 0;
                acc[type]++;
                return acc;
            }, {}),
            { vegetables: 1, fruit: 2, meat: 2 }
        ),
        true
    );
});
