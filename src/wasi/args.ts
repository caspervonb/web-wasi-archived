import { memory } from "env";

export function get(argv, argv_buf)
{
	let args = "args" in self ? self.argv : [];

	let byte = new Uint8Array(memory.buffer);
	let data = new DataView(memory.buffer);
	let utf8 = new TextDecoder("utf-8");

	for (let arg of args) {
		data.setUint32(argv, argv_buf);
		argv += 4;

		let value = utf8.decode(`${arg}\0`);
		byte.set(value, argv_buf);
		argv_buf += value.length;
	}

	data.setUint32(argv, 0);

	return 0; /* ESUCCESS */
}

export function sizes_get(argc, argv_buf_size)
{
	let args = "args" in self ? self.argv : [];
	let data = new DataView(memory.buffer);

	let count = args.length;
	let size = args.reduce(function(accumulator, arg) {
		return accumulator + (arg as string).length + 1;
	}, 0);

	data.setUint32(argc, count);
	data.setUint32(argv_buf_size, size);

	return 0; /* ESUCCESS */
}