"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("bluebird");
exports.promiseWhile = function (condition, action) {
    var resolver = new Promise.defer();
    var loop = function () {
        if (!condition()) {
            return resolver.resolve();
        }
        return Promise.cast(action())
            .then(loop)
            .catch(resolver.reject);
    };
    process.nextTick(loop);
    return resolver.promise;
};
