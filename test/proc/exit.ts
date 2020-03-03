export let memory = new WebAssembly.Memory({
    initial: 1,
});

import { exit as proc_exit } from "wasi/proc";

try {
	proc_exit(0);
	console.assert(false);
} catch (err) {
	console.assert(err == 0);
}