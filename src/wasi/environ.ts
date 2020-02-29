import { memory } from "env";

export function get(environ, environ_buf)
{
	return 0; /* ESUCCESS */
}

export function sizes_get(environc, environ_buf_size)
{
	let data = new DataView(memory.buffer);

	data.setBigUint64(environc, 0n);
	data.setBigUint64(environ_buf_size, 0n);

	return 0; /* ESUCCESS */
}