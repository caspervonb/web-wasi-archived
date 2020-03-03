export let memory = new WebAssembly.Memory({
	initial: 1,
});

import { get as random_get } from "wasi/random";

let errno = random_get(0, 256);
console.assert(errno == 0);