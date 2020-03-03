import { memory } from "env";

export function get(buf, buf_len)
{
	const data = new Uint8Array(memory.buffer, buf, buf_len);

	crypto.getRandomValues(data);

	return 0; /* ESUCCESS */
}