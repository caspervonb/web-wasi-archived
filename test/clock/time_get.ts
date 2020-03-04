export let memory = new WebAssembly.Memory({
    initial: 1,
});

import { time_get as clock_time_get } from "wasi/clock";

let clocks = [
	{ id : 0, time: 0n },
	{ id : 1, time: 0n },
];

let data = new DataView(memory.buffer);

for (let clock of clocks) {
	let errno = clock_time_get(clock.id, 0, 8);
	console.assert(errno == 0);

	let time = data.getBigUint64(8);
	console.assert(time > clock.time);
}