export let memory = new WebAssembly.Memory({
	initial: 1,
});

import { get as random_get } from "wasi/random";

let data = new DataView(memory.buffer);
let errno = random_get(0, 256);
console.assert(errno == 0);

let sum = 0;
for (let i = 0; i < 256; i++) {
	sum += data.getUint8(i);
}

console.assert(sum > 0);
