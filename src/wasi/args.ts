import { memory } from "env";

export function get(argv, argv_buf)
{
	let args = "args" in self ? self.args : [];
	let data = new DataView(memory.buffer);

	for (let arg of args) {
		data.setUint32(argv, argv_buf);
		argv += 4;

		let string = `${arg}\0`;
		for (let i = 0; i < string.length; i++) {
			data.setUint32(argv_buf + i, string.charCodeAt(i));
		}

		argv_buf += string.length;
	}

	data.setUint32(argv, 0);

	return 0; /* ESUCCESS */
}

export function sizes_get(argc, argv_buf_size)
{
	let args = "args" in self ? self.args : [];
	let data = new DataView(memory.buffer);

	let count = args.length;
	let size = args.reduce(function(accumulator, arg) {
		return accumulator + (arg as string).length + 1;
	}, 0);

	data.setUint32(argc, count);
	data.setUint32(argv_buf_size, size);

	return 0; /* ESUCCESS */
}