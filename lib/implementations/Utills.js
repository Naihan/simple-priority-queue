"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
exports.promiseWhile = (condition, action) => {
    const resolver = new Promise.defer();
    const loop = () => {
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
