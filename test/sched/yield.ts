export let memory = new WebAssembly.Memory({
	initial: 1,
});

import { yield as sched_yield } from "wasi/sched";

let errno = sched_yield();
console.assert(errno == 0);