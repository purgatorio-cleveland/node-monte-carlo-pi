const { Worker } = require('worker_threads');
const { SamplerWorkerData } = require('./sampler_worker_data.js');
const utility = require('./utility.js');

function displayResults(piEstimate, numSamples, numThreads, elapsedTime) {
    console.log(`PI =~ ${piEstimate}`);
    console.log(`Samples = ${utility.commafyNumber(numSamples)}`);    
    console.log(`Threads = ${numThreads}`);    
    console.log(`Time = ${utility.commafyNumber(elapsedTime)} ms`);    
}

function createSamplerPromise(numSamples, threadIndex) {
    return new Promise((resolve, reject) => {
        const samplerWorkerData = new SamplerWorkerData(numSamples, threadIndex);
        const worker = new Worker('./sampler_worker.js', {workerData: samplerWorkerData});
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
        if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        })
    })
}

function calculatePi(numSamples, numThreads) {
    const startTime = Date.now();
    const samplesPerThread = Math.floor(numSamples / numThreads);
    let promises = [];
    for (let i = 0; i < numThreads; i++) {
        promises.push(createSamplerPromise(samplesPerThread, i));
    }
    Promise.all(promises).then(results => {
        const pointsInQuarterCircle = utility.sumArray(results);
        const piEstimate = 4.0 * pointsInQuarterCircle / numSamples;
        const elapsedTime = Date.now() - startTime;
        displayResults(piEstimate, samplesPerThread * numThreads, numThreads, elapsedTime);    
    });
}

function main() {
    const NUM_SAMPLES = 1_000_000_000;
    const NUM_THREADS = 4;
    calculatePi(NUM_SAMPLES, NUM_THREADS);
}

main();

