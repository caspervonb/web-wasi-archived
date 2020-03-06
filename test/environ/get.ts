export let memory = new WebAssembly.Memory({
    initial: 1,
});

import { get as environ_get } from "wasi/environ";

let errno = environ_get(0, 4);
console.assert(errno == 0);