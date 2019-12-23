const { workerData, parentPort } = require('worker_threads');
const sampler = require('./sampler.js');

// Extract the info passed at invocation.
const numSamples = workerData.numSamples;
const seedOffset = workerData.threadIndex;

// Process in the isolated thread.
const pointsInQuarterCircle = sampler.sampleNumPointsInQuarterCircle(numSamples, seedOffset);

// Return the result and exit.
parentPort.postMessage(pointsInQuarterCircle);
