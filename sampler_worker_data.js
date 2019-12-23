class SamplerWorkerData {
    constructor(numSamples, threadIndex) {
        this.numSamples = numSamples;
        this.threadIndex = threadIndex;
    }
}

// Exports
module.exports = {
    "SamplerWorkerData" : SamplerWorkerData
}
    