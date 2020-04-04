import { memory } from "env";

export function get(environ, environ_buf)
{
	let env = "env" in self ? self.env : {};

	let bytes = new Uint8Array(memory.buffer);
	let data = new DataView(memory.buffer);
	let encoder = new TextEncoder();

	let entries = Object.entries(env);
	for (let [key, value] of entries) {
        data.setUint32(environ, environ_buf);
		environ += 4;

		let encoded = encoder.encode(`${key}=${value}\0`);
		bytes.set(encoded, environ_buf);
		environ_buf += encoded.length;
	}

	data.setUint32(environ, 0);

	return 0; /* ESUCCESS */
}

export function sizes_get(environc, environ_buf_size)
{
	let env = "env" in self ? self.env : {};
	let data = new DataView(memory.buffer);

	let keys = Object.keys(env);
	let count = keys.length;

	let entries = Object.entries(env);
	let size = entries.reduce(function(accumulator, [key, value]) {
		return accumulator + key.length + (value as string).length + 2;
	}, 0);

	data.setUint32(environc, count);
	data.setUint32(environ_buf_size, size);

	return 0; /* ESUCCESS */
}