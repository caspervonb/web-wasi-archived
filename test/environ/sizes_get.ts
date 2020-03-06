export let memory = new WebAssembly.Memory({
    initial: 1,
});

import { sizes_get as environ_sizes_get } from "wasi/environ";

let errno = environ_sizes_get(0, 4);
console.assert(errno == 0);