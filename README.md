# Priority Queue

Simple and fast priority queue that uses promise based of while iteration and not blocking the main thread.

>

[![NPM](https://img.shields.io/npm/v/react-d3-tree-editor.svg)](https://www.npmjs.com/package/simple-priority-queue) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Contents <!-- omit in toc -->

- [Usage](#basic-usage)
- [License](#license)

## Install

```bash
npm i --save simple-priority-queue
```

## Basic Usage

```ts
const { PriorityQueue } = require('simple-priority-queue');

const myQueue = new PriorityQueue(true); //true for maxheap, default is minheap
// enqueue recive 2 params nodeData: any object , nodePriority: priority of data
myQueue.insert({ myCoolData: 'MyCoolValue' }, 1);
myQueue.insert({ myCoolData: 'MyCoolValue' }, 2);
myQueue.insert({ myCoolData: 'MyCoolValue' }, 3);
myQueue.insert({ myCoolData: 'MyCoolValue' }, 4);
// dequeue by order of the priority
const value = myQueue.poll();

// sort the data (will remove the content of queue)
const mySortedArray = await myQueue.heapSort();
```

## License

MIT © [https://github.com/Naihan/simple-priority-queue](https://github.com/Naihan/simple-priority-queue)
