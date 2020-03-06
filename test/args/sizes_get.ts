export let memory = new WebAssembly.Memory({
    initial: 1,
});

import { sizes_get as args_sizes_get } from "wasi/args";

let errno = args_sizes_get(0, 4);
console.assert(errno == 0);