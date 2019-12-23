# Configuration

Modify the following parameters in app.js main():

NUM_SAMPLES - This is the number of samples used in the simulation. Note that this number is divided by the number of workers, such that the actual count may be slightly less.

Example: If NUM_SAMPLES is 1,000,000 and NUM_THREADS is 3, then each thread (worker) processes, 333,333 samples, with a total of 999,999 actual samples.

NUM_THREADS - This is the number of JavaScript workers. Note that the main thread is not included in this count.

# Execution

```
$ node app.js
```

Sample Output:

```
PI =~ 3.140931788
Samples = 1,000,000,000
Threads = 4
Time = 4,315 ms
```
