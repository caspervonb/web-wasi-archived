import { memory } from "env";

export function get(buf, buf_len)
{
	const data = new Uint8Array(memory.buffer, buf, buf_len);

	for (let i = 0; i < buf_len; ++i) {
		data[i] = (Math.random() * 256) | 0;
	}

	return 0; /* ESUCCESS */
}