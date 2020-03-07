import { memory } from "env";

export function get(environ, environ_buf)
{
	let env = "env" in self ? self.env : {};
	let data = new DataView(memory.buffer);

	let entries = Object.entries(env);
	for (let [key, value] of entries) {
        data.setUint32(environ, environ_buf);
		environ += 4;

		let string = `${key}=${value}\0`;
		for (let i = 0; i < string.length; i++) {
			data.setUint32(environ_buf + i, string.charCodeAt(i));
		}

		environ_buf += string.length;
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