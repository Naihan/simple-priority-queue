"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryHeap_1 = require("./BinaryHeap");
class PriorityQueue {
    constructor(isMaxHeap = false) {
        this._binaryHeap = new BinaryHeap_1.default(isMaxHeap);
    }
    enqueue(nodeData, nodePriority) {
        this._binaryHeap.insertNode(nodeData, nodePriority);
    }
    dequeue() {
        return this._binaryHeap.popNode();
    }
    heapSort() {
        return __awaiter(this, void 0, void 0, function* () {
            const sortedHeap = yield this._binaryHeap.heapSort();
            return sortedHeap;
        });
    }
}
exports.default = PriorityQueue;
