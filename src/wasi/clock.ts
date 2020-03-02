import { memory } from "env";

export function res_get(id, resolution)
{
	let data = new DataView(memory.buffer);

	switch (id) {
	case 0: /* CLOCK_REALTIME */
		data.setBigUint64(resolution, BigInt(0));
		break;

	case 1: /* CLOCK_MONOTONIC */
		data.setBigUint64(resolution, BigInt(0));
		break;

	default:
		return 28; /* EINVAL */
	}

	return 0; /* ESUCCESS */
}

export function time_get(id, precision, time)
{
	let data = new DataView(memory.buffer);

	switch (id) {
	case 0: /* CLOCK_REALTIME */
		let realtime = Math.floor(Date.now() * 1e6);
		data.setBigUint64(time, BigInt(realtime));
		break;

	case 1: /* CLOCK_MONOTONIC */
		let monotonic = Math.floor(performance.now() * 1e9);
		data.setBigUint64(time, BigInt(monotonic));
		break;

	default:
		return 28; /* EINVAL */
	}

	return 0; /* ESUCCESS */
}