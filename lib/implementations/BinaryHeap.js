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
const HeapNode_1 = require("./HeapNode");
const Utills_1 = require("./Utills");
class BinaryHeap {
    constructor(isMaxHeap = false) {
        this._heapStorage = [null];
        this._sortingArray = [];
        this._minMaxCondition = (a, b) => isMaxHeap ? a > b : a < b;
    }
    insertNode(nodeData, nodePriority) {
        // create a HeapNode instance
        const heapNode = new HeapNode_1.default(nodeData, nodePriority);
        // push to the last place
        const index = this._heapStorage.push(heapNode) - 1;
        this.validateInsert(index);
    }
    heapSort() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Utills_1.promiseWhile(() => this._heapStorage.length !== 1, () => this.popNode());
            return this._sortingArray;
        });
    }
    validateInsert(index) {
        var _a, _b;
        // get the parent element
        const parentIndex = Math.floor(index / 2);
        if (this._minMaxCondition((_a = this._heapStorage[parentIndex]) === null || _a === void 0 ? void 0 : _a.nodePriority, (_b = this._heapStorage[index]) === null || _b === void 0 ? void 0 : _b.nodePriority) ||
            parentIndex === 0) {
            return true;
        }
        // swap
        this.swapValues(index, parentIndex);
        // recurse
        return this.validateInsert(parentIndex);
    }
    swapValues(indexA, indexB) {
        const nodeA = this._heapStorage[indexA];
        const nodeB = this._heapStorage[indexB];
        this._heapStorage[indexA] = nodeB;
        this._heapStorage[indexB] = nodeA;
    }
    popNode() {
        // get the first element
        const firstElement = this._heapStorage[1];
        // get the last element
        const lastElement = this._heapStorage[this._heapStorage.length - 1];
        // put the last element in a sorting queue
        this._sortingArray.unshift(firstElement);
        // set the last elelment in the first place
        this._heapStorage[1] = lastElement;
        // delete the last elelment t place
        this._heapStorage.splice(this._heapStorage.length - 1, 1);
        // validate remove
        this.validateRemove(1);
        return firstElement;
    }
    validateRemove(index) {
        // get children
        const leftIndex = 2 * index;
        const rightIndex = 2 * index + 1;
        // if one of the indexes are out of range return true and break recursion
        if (!this._heapStorage[leftIndex] || !this._heapStorage[rightIndex]) {
            return true;
        }
        // call condition
        const smallest = this._minMaxCondition(this._heapStorage[rightIndex].nodePriority, this._heapStorage[leftIndex].nodePriority)
            ? rightIndex
            : leftIndex;
        // swap
        this.swapValues(index, smallest);
        // recurse
        return this.validateRemove(smallest);
    }
}
exports.default = BinaryHeap;
