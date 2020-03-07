import { memory } from "env";

let entries = [];

export function advise(fd, offset, len, advice)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000000080); /* RIGHT_FD_ADVISE */
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	return 52; /* ENOSYS */
}

export function allocate(fd, offset, len)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000000100); /* RIGHT_FD_ALLOCATE */
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	return 52; /* ENOSYS */
}

export function close(fd)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	if (entry.close) {
		entry.close();
	}

	entries[fd] = undefined;

	return 0; /* ESUCCESS */
}

export function datasync(fd)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000000001); /* RIGHT_FD_DATASYNC*/
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	if (entry.datasync) {
		entry.datasync();
	}

	return 0; /* ESUCCESS */
}

export function fdstat_get(fd, buf)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let data = new DataView(memory.buffer);

	data.setUint8(buf, entry.type);
	buf += 2;

	data.setUint16(buf, 0, true);
	buf += 4;

	data.setUint16(buf, 0, true);
	buf += 4;

	data.setBigUint64(buf, BigInt(entry.rights.base), true);
	buf += 8;

	data.setBigUint64(buf, BigInt(entry.rights.inheriting), true);
	buf += 8;

	return 0; /* ESUCCESS */
}

export function fdstat_set_flags(fd, flags)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000000008); /* RIGHT_FD_SET_FLAGS */
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	return 52; /* ENOSYS */
}

export function fdstat_set_rights(fd, fs_rights_base, fs_rights_inheriting)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let base = entry.rights.base | fs_rights_base;
	if (base > entry.rights.base) {
		return 63; /* EPERM */
	}

	let inheriting = entry.rights.inheriting | fs_rights_inheriting;
	if (inheriting > entry.rights.inheriting) {
		return 63; /* EPERM */
	}

	entry.rights.base = base;
	entry.rights.inheriting = inheriting;

	return 0; /* ESUCCESS */
}

export function filestat_get(fd, buf)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let data = new DataView(memory.buffer);

	data.setBigUint64(buf, BigInt(0), true);
	buf += 8;

	data.setBigUint64(buf, entry.ino, true);
	buf += 8;

	data.setUint8(buf, entry.type);
	buf += 2;

	data.setUint8(buf, entry.dev);
	buf += 2;

	data.setUint32(buf, entry.nlink, true);
	buf += 4;

	data.setBigUint64(buf, entry.size, true);
	buf += 8;

	data.setBigUint64(buf, entry.atime, true);
	buf += 8;

	data.setBigUint64(buf, entry.mtime, true);
	buf += 8;

	data.setBigUint64(buf, entry.ctime, true);
	buf += 8;

	return 0; /* ESUCCESS */
}

export function filestat_set_size(fd, size)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	entry.truncate(size);

	return 0; /* ENOSYS */
}

export function filestat_set_times(fd, atim, mtime, fst_flags)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	return 0; /* ENOSYS */
}

export function permissions_set(fd, permissions)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	return 52; /* ENOSYS */
}

export function pread(fd, iovs, iovs_len, offset, nread)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000000002) | BigInt(0x0000000000000004); /* RIGHT_FD_READ | RIGHT_FD_SEEK */
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	let data = new DataView(memory.buffer);

	let read = 0;
	for (let i = 0; i < iovs_len; i++) {
		let buf = data.getUint32(iovs);
		iovs += 4;

		let len = data.getUint32(iovs);
		iovs += 4;

		let bytes = new Uint8Array(data.buffer, buf, len);
		read += entry.read(bytes, offset + read);
	}

	data.setUint32(nread, read, true);

	return 0; /* ESUCCESS */
}

export function prestat_get(fd, buf)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	return 52; /* ENOSYS */
}

export function prestat_dir_name(fd, path, path_len)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	return 52; /* ENOSYS */
}

export function pwrite(fd, iovs, iovs_len, offset, nwritten)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000000040) | BigInt(0x0000000000000004); /* RIGHT_FD_WRITE | RIGHT_FD_SEEK */
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	let data = new DataView(memory.buffer);

	let written = 0;
	for (let i = 0; i < iovs_len; i++) {
		let buf = data.getUint32(iovs);
		iovs += 4;

		let len = data.getUint32(iovs);
		iovs += 4;

		let bytes = new Uint8Array(data.buffer, buf, len);
		written += entry.write(bytes, offset + written);
	}

	data.setUint32(nwritten, written, true);

	return 0; /* ESUCCESS */
}

export function read(fd, iovs, iovs_len, nread)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let data = new DataView(memory.buffer);

	let read = 0;
	for (let i = 0; i < iovs_len; i++) {
		let buf = data.getUint32(iovs);
		iovs += 4;

		let len = data.getUint32(iovs);
		iovs += 4;

		let bytes = new Uint8Array(data.buffer, buf, len);
		read += entry.read(bytes);
	}

	data.setUint32(nread, read, true);

	return 0; /* ESUCCESS */
}

export function readdir(fd, buf, buf_len, cookie, bufused)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000004000); /* RIGHT_FD_READDIR */
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	let bytes = new Uint8Array(memory.buffer);
	let data = new DataView(memory.buffer);
	let encoder = new TextEncoder();

	let start = buf;
	for (let i = cookie; i < entry.entries.length; i++) {
		let name = encoder.encode(entry.entries[i].name);

		data.setBigUint64(buf, BigInt(i + 1), true);
		buf += 8;

		data.setBigUint64(buf, BigInt(entry.entries[i].ino), true);
		buf += 8;

		data.setUint32(buf, name.length, true);
		buf += 4;

		data.setUint8(buf, entry.entries[i].type);
		buf += 4;

		bytes.set(name, buf);
		buf += bytes.length;
		buf += (8 % buf);
	}

	data.setUint32(bufused, (buf - start), true);
	buf += 4;

	return 0; /* ESUCCESS */
}

export function renumber(fd, to)
{
	if (entries[fd] == undefined) {
		return 8; /* EBADF */
	}

	if (entries[to] == undefined) {
		return 8; /* EBADF */
	}

	entries[to] = entries[fd];
	entries[fd] = undefined;

	return 0; /* ESUCCESS */
}

export function seek(fd, offset, whence, newoffset)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000000004); /* RIGHT_FD_SEEK */
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	switch (whence) {
	case 0: /* WHENCE_CUR */
		entry.offset = BigInt(entry.offset) + BigInt(offset);
		break;
	case 1: /* WHENCE_END */
		entry.offset = BigInt(entry.size) + BigInt(offset);
		break;
	case 2: /* WHENCE_SET */
		entry.offset = BigInt(offset);
		break;
	}

	let data = new DataView(memory.buffer);
	data.setBigUint64(newoffset, entry.offset, true);

	return 0; /* ESUCCESS */
}

export function sync(fd)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000000010); /* RIGHT_FD_SYNC */
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	entry.sync();

	return 0; /* ESUCCESS */
}

export function tell(fd, offset)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000000020); /* RIGHT_FD_TELL */
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	let data = new DataView(memory.buffer);
	data.setUint32(offset, entry.offset);

	return 0; /* ESUCCESS */
}

export function write(fd, iovs, iovs_len, nwritten)
{
	let entry = entries[fd];
	if (entry == undefined) {
		return 8; /* EBADF */
	}

	let rights = BigInt(0x0000000000000040); /* RIGHT_FD_WRITE */
	if ((entry.rights.base & rights) == BigInt(0)) {
		return 63; /* EPERM */
	}

	let data = new DataView(memory.buffer);

	let written = 0;
	for (let i = 0; i < iovs_len; i++) {
		let buf = data.getUint32(iovs);
		iovs += 4;

		let len = data.getUint32(iovs);
		iovs += 4;

		let bytes = new Uint8Array(data.buffer, buf, len);
		written += entry.write(bytes);
	}

	data.setUint32(nwritten, written);

	return 0; /* ESUCCESS */
}
