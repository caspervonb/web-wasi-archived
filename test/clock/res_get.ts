export let memory = new WebAssembly.Memory({
    initial: 1,
});

import { res_get as clock_res_get } from "wasi/clock";

let clocks = [
	{ id : 0, resolution: 0n },
	{ id : 1, resolution: 0n },
];

let data = new DataView(memory.buffer);

for (let clock of clocks) {
	let errno = clock_res_get(clock.id, 0);
	console.assert(errno == 0);

	let resolution = data.getBigUint64(0);
	console.assert(resolution == clock.resolution);
}