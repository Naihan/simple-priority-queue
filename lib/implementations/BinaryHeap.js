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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var HeapNode_1 = require("./HeapNode");
var Utills_1 = require("./Utills");
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap(isMaxHeap) {
        if (isMaxHeap === void 0) { isMaxHeap = false; }
        this._heapStorage = [null];
        this._sortingArray = [];
        this._minMaxCondition = function (a, b) { return (isMaxHeap ? a > b : a < b); };
    }
    BinaryHeap.prototype.size = function () {
        return this._heapStorage.length;
    };
    BinaryHeap.prototype.insertNode = function (nodeData, nodePriority) {
        // create a HeapNode instance
        var heapNode = new HeapNode_1.default(nodeData, nodePriority);
        // push to the last place
        var index = this._heapStorage.push(heapNode) - 1;
        this.validateInsert(index);
    };
    BinaryHeap.prototype.heapSort = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utills_1.promiseWhile(function () { return _this._heapStorage.length !== 1; }, function () { return _this.popNode(); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this._sortingArray];
                }
            });
        });
    };
    BinaryHeap.prototype.validateInsert = function (index) {
        var _a, _b;
        // get the parent element
        var parentIndex = Math.floor(index / 2);
        if (this._minMaxCondition((_a = this._heapStorage[parentIndex]) === null || _a === void 0 ? void 0 : _a.nodePriority, (_b = this._heapStorage[index]) === null || _b === void 0 ? void 0 : _b.nodePriority) ||
            parentIndex === 0) {
            return true;
        }
        // swap
        this.swapValues(index, parentIndex);
        // recurse
        return this.validateInsert(parentIndex);
    };
    BinaryHeap.prototype.swapValues = function (indexA, indexB) {
        var nodeA = this._heapStorage[indexA];
        var nodeB = this._heapStorage[indexB];
        this._heapStorage[indexA] = nodeB;
        this._heapStorage[indexB] = nodeA;
    };
    BinaryHeap.prototype.popNode = function () {
        // get the first element
        var firstElement = this._heapStorage[1];
        // get the last element
        var lastElement = this._heapStorage[this._heapStorage.length - 1];
        // put the last element in a sorting queue
        this._sortingArray.unshift(firstElement);
        // set the last elelment in the first place
        this._heapStorage[1] = lastElement;
        // delete the last elelment t place
        this._heapStorage.splice(this._heapStorage.length - 1, 1);
        // validate remove
        this.validateRemove(1);
        return firstElement;
    };
    BinaryHeap.prototype.validateRemove = function (index) {
        // get children
        var leftIndex = 2 * index;
        var rightIndex = 2 * index + 1;
        // if one of the indexes are out of range return true and break recursion
        if (!this._heapStorage[leftIndex] || !this._heapStorage[rightIndex]) {
            return true;
        }
        // call condition
        var smallest = this._minMaxCondition(this._heapStorage[rightIndex].nodePriority, this._heapStorage[leftIndex].nodePriority)
            ? rightIndex
            : leftIndex;
        // swap
        this.swapValues(index, smallest);
        // recurse
        return this.validateRemove(smallest);
    };
    return BinaryHeap;
}());
exports.default = BinaryHeap;
