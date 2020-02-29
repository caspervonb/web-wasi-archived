import { memory } from "env";

export function get(argv, argv_buf)
{
	return 0; /* ESUCCESS */
}

export function sizes_get(argc, argv_buf_size)
{
	let data = new DataView(memory.buffer);

	data.setBigUint64(argc, 0n);
	data.setBigUint64(argv_buf_size, 0n);

	return 0; /* ESUCCESS */
}