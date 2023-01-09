import test from "ava";
import { arrayGroupToMap } from "../dist/groupToMap.js";
import deepEqual from "../../../helpers/deepEqual.js";

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };

test("arrayGroupToMap", (t) => {
    t.is(
        deepEqual(
            arrayGroupToMap(inventory, ({ quantity }) =>
                quantity < 6 ? restock : sufficient
            ).size,
            2
        ),
        true
    );
});

test("Array.prototype.groupToMap()", (t) => {
    t.is(
        deepEqual(
            inventory.groupToMap(({ quantity }) =>
                quantity < 6 ? restock : sufficient
            ).size,
            2
        ),
        true
    );
});
