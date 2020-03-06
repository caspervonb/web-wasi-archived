export let memory = new WebAssembly.Memory({
    initial: 1,
});

import { get as args_get } from "wasi/args";

let errno = args_get(0, 4);
console.assert(errno == 0);