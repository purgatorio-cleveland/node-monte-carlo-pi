class LCG_ParkMiller {
    constructor(seed = 123) {
        this._rand = seed % 2147483647;
    }

    nextFloat() {
        this._rand = (this._rand * 16807) % 2147483647;
        return (this._rand - 1) * (1 / 2147483646);
    }
}

function sampleNumPointsInQuarterCircle (numSamples, seedOffset) {
        
    const rngX = new LCG_ParkMiller(123 + seedOffset);
    const rngY = new LCG_ParkMiller(321 + seedOffset);
    let numPointsinQuarterCircle = 0;
    
    for (let i = 0; i < numSamples; i++) {
        const x = rngX.nextFloat();
        const y = rngY.nextFloat();
        if ((x * x + y * y) <= 1.0)
            numPointsinQuarterCircle++;
    }
    
    return numPointsinQuarterCircle;
}

// Exports
module.exports = {
    "sampleNumPointsInQuarterCircle" : sampleNumPointsInQuarterCircle
}
