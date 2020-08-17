"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeRepo = void 0;
class FakeRepo {
    constructor() {
        this._items = [];
    }
    addFakeItem(t) {
        let found = false;
        for (const item of this._items) {
            if (this.compareFakeItems(item, t)) {
                found = true;
            }
        }
        if (!found) {
            this._items.push(t);
        }
    }
    removeFakeItem(t) {
        this._items = this._items.filter((item) => !this.compareFakeItems(t, item));
    }
}
exports.FakeRepo = FakeRepo;
