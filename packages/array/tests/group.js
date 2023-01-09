import test from "ava";
import { arrayGroup } from "../dist/group.js";
import deepEqual from "../../../helpers/deepEqual.js";

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

test("arrayGroup", (t) => {
    t.is(
        deepEqual(
            arrayGroup(inventory, ({ type }) => type),
            {
                vegetables: [
                    { name: "asparagus", type: "vegetables", quantity: 5 },
                ],
                fruit: [
                    { name: "bananas", type: "fruit", quantity: 0 },
                    { name: "cherries", type: "fruit", quantity: 5 },
                ],
                meat: [
                    { name: "goat", type: "meat", quantity: 23 },
                    { name: "fish", type: "meat", quantity: 22 },
                ],
            }
        ),
        true
    );
});

test("Array.prototype.group()", (t) => {
    t.is(
        deepEqual(
            inventory.group(({ type }) => type),
            {
                vegetables: [
                    { name: "asparagus", type: "vegetables", quantity: 5 },
                ],
                fruit: [
                    { name: "bananas", type: "fruit", quantity: 0 },
                    { name: "cherries", type: "fruit", quantity: 5 },
                ],
                meat: [
                    { name: "goat", type: "meat", quantity: 23 },
                    { name: "fish", type: "meat", quantity: 22 },
                ],
            }
        ),
        true
    );
});
