import {
	memory
} from "env";

const ESUCCESS = 0;
const E2BIG = 1;
const EACCES = 2;
const EADDRINUSE = 3;
const EADDRNOTAVAIL = 4;
const EAFNOSUPPORT = 5;
const EAGAIN = 6;
const EALREADY = 7;
const EBADF = 8;
const EBADMSG = 9;
const EBUSY = 10;
const ECANCELED = 11;
const ECHILD = 12;
const ECONNABORTED = 13;
const ECONNREFUSED = 14;
const ECONNRESET = 15;
const EDEADLK = 16;
const EDESTADDRREQ = 17;
const EDOM = 18;
const EDQUOT = 19;
const EEXIST = 20;
const EFAULT = 21;
const EFBIG = 22;
const EHOSTUNREACH = 23;
const EIDRM = 24;
const EILSEQ = 25;
const EINPROGRESS = 26;
const EINTR = 27;
const EINVAL = 28;
const EIO = 29;
const EISCONN = 30;
const EISDIR = 31;
const ELOOP = 32;
const EMFILE = 33;
const EMLINK = 34;
const EMSGSIZE = 35;
const EMULTIHOP = 36;
const ENAMETOOLONG = 37;
const ENETDOWN = 38;
const ENETRESET = 39;
const ENETUNREACH = 40;
const ENFILE = 41;
const ENOBUFS = 42;
const ENODEV = 43;
const ENOENT = 44;
const ENOEXEC = 45;
const ENOLCK = 46;
const ENOLINK = 47;
const ENOMEM = 48;
const ENOMSG = 49;
const ENOPROTOOPT = 50;
const ENOSPC = 51;
const ENOSYS = 52;
const ENOTCONN = 53;
const ENOTDIR = 54;
const ENOTEMPTY = 55;
const ENOTRECOVERABLE = 56;
const ENOTSOCK = 57;
const ENOTSUP = 58;
const ENOTTY = 59;
const ENXIO = 60;
const EOVERFLOW = 61;
const EOWNERDEAD = 62;
const EPERM = 63;
const EPIPE = 64;
const EPROTO = 65;
const EPROTONOSUPPORT = 66;
const EPROTOTYPE = 67;
const ERANGE = 68;
const EROFS = 69;
const ESPIPE = 70;
const ESRCH = 71;
const ESTALE = 72;
const ETIMEDOUT = 73;
const ETXTBSY = 74;
const EXDEV = 75;
const ENOTCAPABLE = 76;

const SIGABRT = 0;
const SIGALRM = 1;
const SIGBUS = 2;
const SIGCHLD = 3;
const SIGCONT = 4;
const SIGFPE = 5;
const SIGHUP = 6;
const SIGILL = 7;
const SIGINT = 8;
const SIGKILL = 9;
const SIGPIPE = 10;
const SIGQUIT = 11;
const SIGSEGV = 12;
const SIGSTOP = 13;
const SIGTERM = 14;
const SIGTRAP = 15;
const SIGTSTP = 16;
const SIGTTIN = 17;
const SIGTTOU = 18;
const SIGURG = 19;
const SIGUSR1 = 20;
const SIGUSR2 = 21;
const SIGVTALRM = 22;
const SIGXCPU = 23;
const SIGXFSZ = 24;

const FILETYPE_UNKNOWN = 0;
const FILETYPE_BLOCK_DEVICE = 1;
const FILETYPE_CHARACTER_DEVICE = 2;
const FILETYPE_DIRECTORY = 3;
const FILETYPE_REGULAR_FILE = 4;
const FILETYPE_SOCKET_DGRAM = 5;
const FILETYPE_SOCKET_STREAM = 6;
const FILETYPE_SYMBOLIC_LINK = 7;

const FDFLAG_APPEND = 0x0001;
const FDFLAG_DSYNC = 0x0002;
const FDFLAG_NONBLOCK = 0x0004;
const FDFLAG_RSYNC = 0x0008;
const FDFLAG_SYNC = 0x0010;

const RIGHT_FD_DATASYNC = 0x0000000000000001n;
const RIGHT_FD_READ = 0x0000000000000002n;
const RIGHT_FD_SEEK = 0x0000000000000004n;
const RIGHT_FD_FDSTAT_SET_FLAGS = 0x0000000000000008n;
const RIGHT_FD_SYNC = 0x0000000000000010n;
const RIGHT_FD_TELL = 0x0000000000000020n;
const RIGHT_FD_WRITE = 0x0000000000000040n;
const RIGHT_FD_ADVISE = 0x0000000000000080n;
const RIGHT_FD_ALLOCATE = 0x0000000000000100n;
const RIGHT_PATH_CREATE_DIRECTORY = 0x0000000000000200n;
const RIGHT_PATH_CREATE_FILE = 0x0000000000000400n;
const RIGHT_PATH_LINK_SOURCE = 0x0000000000000800n;
const RIGHT_PATH_LINK_TARGET = 0x0000000000001000n;
const RIGHT_PATH_OPEN = 0x0000000000002000n;
const RIGHT_FD_READDIR = 0x0000000000004000n;
const RIGHT_PATH_READLINK = 0x0000000000008000n;
const RIGHT_PATH_RENAME_SOURCE = 0x0000000000010000n;
const RIGHT_PATH_RENAME_TARGET = 0x0000000000020000n;
const RIGHT_PATH_FILESTAT_GET = 0x0000000000040000n;
const RIGHT_PATH_FILESTAT_SET_SIZE = 0x0000000000080000n;
const RIGHT_PATH_FILESTAT_SET_TIMES = 0x0000000000100000n;
const RIGHT_FD_FILESTAT_GET = 0x0000000000200000n;
const RIGHT_FD_FILESTAT_SET_SIZE = 0x0000000000400000n;
const RIGHT_FD_FILESTAT_SET_TIMES = 0x0000000000800000n;
const RIGHT_PATH_SYMLINK = 0x0000000001000000n;
const RIGHT_PATH_REMOVE_DIRECTORY = 0x0000000002000000n;
const RIGHT_PATH_UNLINK_FILE = 0x0000000004000000n;
const RIGHT_POLL_FD_READWRITE = 0x0000000008000000n;
const RIGHT_SOCK_SHUTDOWN = 0x0000000010000000n;

const RIGHTS_ALL = RIGHT_FD_DATASYNC | RIGHT_FD_READ
	| RIGHT_FD_SEEK | RIGHT_FD_FDSTAT_SET_FLAGS | RIGHT_FD_SYNC
	| RIGHT_FD_TELL | RIGHT_FD_WRITE | RIGHT_FD_ADVISE
	| RIGHT_FD_ALLOCATE | RIGHT_PATH_CREATE_DIRECTORY
	| RIGHT_PATH_CREATE_FILE | RIGHT_PATH_LINK_SOURCE
	| RIGHT_PATH_LINK_TARGET | RIGHT_PATH_OPEN | RIGHT_FD_READDIR
	| RIGHT_PATH_READLINK | RIGHT_PATH_RENAME_SOURCE
	| RIGHT_PATH_RENAME_TARGET | RIGHT_PATH_FILESTAT_GET
	| RIGHT_PATH_FILESTAT_SET_SIZE | RIGHT_PATH_FILESTAT_SET_TIMES
	| RIGHT_FD_FILESTAT_GET | RIGHT_FD_FILESTAT_SET_TIMES
	| RIGHT_FD_FILESTAT_SET_SIZE | RIGHT_PATH_SYMLINK
	| RIGHT_PATH_UNLINK_FILE | RIGHT_PATH_REMOVE_DIRECTORY
	| RIGHT_POLL_FD_READWRITE | RIGHT_SOCK_SHUTDOWN;

const RIGHTS_BLOCK_DEVICE_BASE = RIGHTS_ALL;
const RIGHTS_BLOCK_DEVICE_INHERITING = RIGHTS_ALL;

const RIGHTS_CHARACTER_DEVICE_BASE = RIGHTS_ALL;
const RIGHTS_CHARACTER_DEVICE_INHERITING = RIGHTS_ALL;

const RIGHTS_REGULAR_FILE_BASE = RIGHT_FD_DATASYNC | RIGHT_FD_READ
	| RIGHT_FD_SEEK | RIGHT_FD_FDSTAT_SET_FLAGS | RIGHT_FD_SYNC
	| RIGHT_FD_TELL | RIGHT_FD_WRITE | RIGHT_FD_ADVISE
	| RIGHT_FD_ALLOCATE | RIGHT_FD_FILESTAT_GET
	| RIGHT_FD_FILESTAT_SET_SIZE | RIGHT_FD_FILESTAT_SET_TIMES
	| RIGHT_POLL_FD_READWRITE;
const RIGHTS_REGULAR_FILE_INHERITING = 0n;

const RIGHTS_DIRECTORY_BASE = RIGHT_FD_FDSTAT_SET_FLAGS
	| RIGHT_FD_SYNC | RIGHT_FD_ADVISE | RIGHT_PATH_CREATE_DIRECTORY
	| RIGHT_PATH_CREATE_FILE | RIGHT_PATH_LINK_SOURCE
	| RIGHT_PATH_LINK_TARGET | RIGHT_PATH_OPEN | RIGHT_FD_READDIR
	| RIGHT_PATH_READLINK | RIGHT_PATH_RENAME_SOURCE
	| RIGHT_PATH_RENAME_TARGET | RIGHT_PATH_FILESTAT_GET
	| RIGHT_PATH_FILESTAT_SET_SIZE | RIGHT_PATH_FILESTAT_SET_TIMES
	| RIGHT_FD_FILESTAT_GET | RIGHT_FD_FILESTAT_SET_TIMES
	| RIGHT_PATH_SYMLINK | RIGHT_PATH_UNLINK_FILE
	| RIGHT_PATH_REMOVE_DIRECTORY | RIGHT_POLL_FD_READWRITE;
const RIGHTS_DIRECTORY_INHERITING = RIGHTS_DIRECTORY_BASE
	| RIGHTS_REGULAR_FILE_BASE;

const RIGHTS_SOCKET_BASE = RIGHT_FD_READ | RIGHT_FD_FDSTAT_SET_FLAGS
	| RIGHT_FD_WRITE | RIGHT_FD_FILESTAT_GET
	| RIGHT_POLL_FD_READWRITE | RIGHT_SOCK_SHUTDOWN;
const RIGHTS_SOCKET_INHERITING = RIGHTS_ALL;

const RIGHTS_TTY_BASE = RIGHT_FD_READ | RIGHT_FD_FDSTAT_SET_FLAGS
	| RIGHT_FD_WRITE | RIGHT_FD_FILESTAT_GET
	| RIGHT_POLL_FD_READWRITE;
const RIGHTS_TTY_INHERITING = 0n;

const CLOCK_MONOTONIC = 0;
const CLOCK_REALTIME = 1;
const CLOCK_PROCESS_CPUTIME_ID = 2;
const CLOCK_THREAD_CPUTIME_ID = 3;

const CLOCK_PROCESS_CPUTIME_ORIGIN = performance.timeOrigin;
const CLOCK_THREAD_CPUTIME_ORIGIN = performance.timeOrigin;

const EVENTTYPE_CLOCK = 0;
const EVENTTYPE_FD_READ = 1;
const EVENTTYPE_FD_WRITE = 2;

const FILESTAT_SET_ATIM = 1 << 0;
const FILESTAT_SET_ATIM_NOW = 1 << 1;
const FILESTAT_SET_MTIM = 1 << 2;
const FILESTAT_SET_MTIM_NOW = 1 << 3;

const O_CREAT = 1 << 0;
const O_DIRECTORY = 1 << 1;
const O_EXCL = 1 << 2;
const O_TRUNC = 1 << 3;

const PREOPENTYPE_DIR = 0;

const DIRCOOKIE_START = 0;

const FILENO_STDIN = 0;
const FILENO_STDOUT = 1;
const FILENO_STDERR = 2;

const WHENCE_CUR = 0;
const WHENCE_END = 1;
const WHENCE_SET = 2;

class Entry {
	constructor(ino) {
		this.ino = ino;
	}
}

class DirectoryEntry extends Entry {
	constructor(ino, entries) {
		super(ino);

		this.entries = [];
	}

	getDirectory(name, options) {
	}

	getFile(name, options) {
	}

	getEntries() {
		return this.entries;
	}
}

class FileEntry extends Entry {
	constructor(ino, buffer) {
		super(ino);

		this.buffer = buffer;
	}

	read() {
	}

	write() {
	}

	truncate() {
	}
}

class Descriptor {
	constructor(entry) {
		this.entry = entry;
		this.offset = 0;
	}
}

export class ExitStatus {
	constructor(code) {
		this.code = code;
	}
}

const args = [];
if (self.args) {
	self.argv.forEach((arg) => {
		args.push(arg);
	});
}

const env = [];
if (self.env) {
	Object.entries(self.env).forEach([key, value] => {
		env[key] = value;
	});
}

const root = new FileSystemDirectory([
]);

const descriptors = [];
// TODO support preopen

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function args_get(argv, argv_buf_ptr) {
	const heap = new Uint8Array(memory.buffer);
	const view = new DataView(memory.buffer);

	args.forEach((arg) => {
		view.setUint32(argv_ptr, argv_buf_ptr, true);
		argv_ptr += 4;

		const arg_data = encoder.encode(`${arg}\0`);
		heap.set(arg_data, argv_buf_ptr);
		argv_buf_ptr  += data.length;
	});

	return ESUCCESS;
}

export function args_sizes_get(argc_ptr, argv_buf_size_ptr)
{
	const heap = new Uint8Array(memory.buffer);
	const view = new DataView(memory.buffer);

	data.setUint32(argc_ptr, args.length, true);
	data.setUint32(argv_buf_size_ptr, args.reduce((acc, arg) => { acc + encoder.encode(arg).length + 1 }, 0), true);

	return ESUCCESS;
}

export function clock_res_get(id, resolution_ptr)
{
	const view = new DataView(memory.buffer);

	switch (id) {
		case CLOCK_MONOTONIC:
		case CLOCK_REALTIME:
		case CLOCK_PROCESS_CPUTIME_ID:
		case CLOCK_THREAD_CPUTIME_ID:
			data.setBigUint64(resolution_ptr, 0n, true);
			break;

		default:
			return EINVAL;
	}

	return ESUCCESS;
}

export function clock_time_get(id, precision_ptr, time_ptr)
{
	const view = new DataView(memory.buffer);

	switch (id) {
		case CLOCK_MONOTONIC:
			view.setBigUint64(time_ptr, BigInt(performance.now() * 1e9), true);
			break;

		case CLOCK_REALTIME:
			view.setBigUint64(time_ptr, BigInt(Date.now() * 1e6), true);
			break;

		case CLOCK_PROCESS_CPUTIME_ID:
			view.setBigUint64(time_ptr, BigInt((performance.now() - CLOCK_PROCESS_CPUTIME_ORIGN) * 1e9), true);
			break;

		case CLOCK_THREAD_CPUTIME_ID:
			view.setBigUint64(time_ptr, BigInt((performance.now() - CLOCK_THREAD_CPUTIME_ORIGIN) * 1e9), true);
			break;
		default:
			return EINVAL;
	}

	return ESUCCESS;
}

export function environ_get(environ_ptr, environ_buf_ptr)
{
	const heap = new Uint8Array(memory.buffer);
	const view = new DataView(memory.buffer);

	Object.descriptors(env).forEach(([key, value]) => {
		view.setUint32(environ_ptr, environ_buf_ptr, true);
		environ += 4;

		const data = encoder.encode(`${key}=${value}\0`);
		heap.set(data, environ_buf_ptr);
		environ_buf_ptr += data.length;
	});

	return ESUCCESS;
}

export function environ_sizes_get(environc_ptr, environ_buf_size_ptr)
{
	const values = Object.entries(env).map(([key, value]) => `${key}=${value}\0`);

	this.view.setUint32(environc_ptr, values.length, true);
	this.view.setUint32(environ_buf_size, values.reduce((acc, val) => { acc + encoder.encode(val).length }, 0), true);

	return ESUCCESS;
}

export function fd_advise(fd, offset, len, advice)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_FD_ADVISE) == 0n) {
		return EPERM;
	}

	return ESUCCESS;
}

export function fd_allocate(fd, offset, len)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_FD_ALLOCATE) == 0n) {
		return EPERM;
	}

	return ESUCCESS;
}

export function fd_close(fd)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	descriptors[fd] = undefined;

	return ESUCCESS;
}

export function fd_datasync(fd)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & FD_RIGHT_DATASYNC) == 0n) {
		return EPERM;
	}

	return ESUCCESS;
}

export function fd_fdstat_get(fd, buf_ptr)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	const view = new DataView(memory.buffer);

	switch (true) {
		case descriptor.entry.isFile:
			data.setUint8(buf_ptr, descriptor.type);
			buf_ptr += 2;
			break;
	}

	data.setUint16(buf_ptr, 0, true);
	buf_ptr += 4;

	data.setUint16(buf_ptr, 0, true);
	buf_ptr += 4;

	data.setBigUint64(buf_ptr, BigInt(descriptor.rights.base), true);
	buf_ptr += 8;

	data.setBigUint64(buf_ptr, BigInt(descriptor.rights.inheriting), true);
	buf_ptr += 8;

	return ESUCCESS;
}

export function fdstat_set_flags(fd, flags)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF; /* EBADF */
	}

	if ((descriptor.rights.base & RIGHT_FD_SET_FLAGS) == 0n) {
		return EPERM;
	}

	return ESUCCESS;
}

export function fdstat_set_rights(fd, fs_rights_base, fs_rights_inheriting)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	const base = descriptor.rights.base | fs_rights_base;
	if (base > descriptor.rights.base) {
		return EPERM;
	}

	const inheriting = descriptor.rights.inheriting | fs_rights_inheriting;
	if (inheriting > descriptor.rights.inheriting) {
		return EPERM;
	}

	descriptor.rights.base = base;
	descriptor.rights.inheriting = inheriting;

	return ESUCCESS;
}

export function filestat_get(fd, buf)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	const view = new DataView(memory.buffer);

	view.setBigUint64(buf_ptr, 0n, true);
	buf_ptr += 8;

	view.setBigUint64(buf_ptr, descriptor.ino, true);
	buf_ptr += 8;

	view.setUint8(buf_ptr, descriptor.type);
	buf_ptr += 2;

	view.setUint8(buf_ptr, descriptor.dev);
	buf_ptr += 2;

	view.setUint32(buf_ptr, descriptor.nlink, true);
	buf_ptr += 4;

	view.setBigUint64(buf_ptr, descriptor.size, true);
	buf_ptr += 8;

	view.setBigUint64(buf_ptr, descriptor.atime, true);
	buf_ptr += 8;

	view.setBigUint64(buf_ptr, descriptor.mtime, true);
	buf_ptr += 8;

	view.setBigUint64(buf_ptr, descriptor.ctime, true);
	buf_ptr += 8;

	return 0; /* ESUCCESS */
}

export function fd_filestat_set_size(fd, size)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	descriptor.entry.truncate(size);

	return ESUCCESS;
}

export function fd_filestat_set_times(fd, atim, mtime, fst_flags)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	return ESUCCESS;
}

export function fd_permissions_set(fd, permissions)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	return ESUCCESS;
}

export function fd_pread(fd, iovs_ptr, iovs_len, offset, nread_ptr)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_FD_READ | RIGHT_FD_SEEK) == 0n) {
		return EPERM;
	}

	const view = new DataView(memory.buffer);

	let nread = 0;
	for (let i = 0; i < iovs_len; i++) {
		const ptr = view.getUint32(iovs_ptr);
		iovs += 4;

		const len = view.getUint32(iovs_ptr);
		iovs += 4;

		const data = new Uint8Array(view.buffer, ptr, len);
		nread += descriptor.entry.read(bytes, offset + nread);
	}

	view.setUint32(nread_ptr, nread, true);

	return 0; /* ESUCCESS */
}

export function fd_prestat_get(fd, buf_ptr)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if (!descriptor.path) {
		return EINVAL;
	}

	view.setUint8(buf_ptr, PREOPENTYPE_DIR);
	buf += 4;

	view.setUint32(buf_ptr, encoder.encode(descriptor.path).length, true);
	buf += 4;

	return WASI_ESUCCESS;
}

export function fd_prestat_dir_name(fd, path_ptr, path_len)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if (!descriptor.path) {
		return EINVAL;
	}

	return 52; /* ENOSYS */
}

export function fd_pwrite(fd, iovs_ptr, iovs_len, offset, nwritten_ptr)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((rights.base & RIGHT_FD_WRITE | RIGHT_FD_SEEK) == 0n) {
		return EPERM;
	}

	const view = new DataView(memory.buffer);

	let nwritten = 0;
	for (let i = 0; i < iovs_len; i++) {
		const ptr = data.getUint32(iovs);
		iovs += 4;

		const len = data.getUint32(iovs);
		iovs += 4;

		const data = new Uint8Array(memory.buffer, ptr, len);
		written += descriptor.entry.write(data, offset + written);
	}

	view.setUint32(nwritten_ptr, nwritten, true);

	return ESUCCESS;
}

export function fd_read(fd, iovs_ptr, iovs_len, nread_ptr)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	const view = new DataView(memory.buffer);

	let nread = 0;
	for (let i = 0; i < iovs_len; i++) {
		const ptr = view.getUint32(iovs);
		iovs += 4;

		const len = view.getUint32(iovs);
		iovs += 4;

		const data = new Uint8Array(memory.buffer, ptr, len);
		nread += descriptor.entry.read(bytes, descriptor.offset + read);
	}

	descriptor.offset += nread;
	view.setUint32(nread_ptr, nread, true);

	return ESUCCESS;
}

export function fd_readdir(fd, buf_ptr, buf_len, cookie, bufused_ptr)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_FD_READDIR) == 0n) {
		return EPERM;
	}

	const heap = new Uint8Array(memory.buffer);
	const view = new DataView(memory.buffer);

	const entries = descriptor.entry.getEntries();
	const start_ptr = buf_ptr;

	for (let i = cookie; i < entries.length; i++) {
		const entry = entries[i];

		view.setBigUint64(buf_ptr, BigInt(i + 1), true);
		buf += 8;

		view.setBigUint64(buf_ptr, BigInt(entry.stat.ino), true);
		buf += 8;

		const name_data = encoder.encode(entry.name);
		view.setUint32(buf_ptr, name_data.length, true);
		buf += 4;

		view.setUint8(buf_ptr, descriptor.descriptors[i].type);
		buf += 4;

		heap.set(name_data, buf);
		buf_ptr += name_data.length;
		buf_ptr += (8 % buf);
	}

	view.setUint32(bufused_ptr, (buf_ptr - start_ptr), true);
	buf_ptr += 4;

	return ESUCCESS;
}

export function fd_renumber(from, to)
{
	if (!descriptors[from]) {
		return EBADF;
	}

	if (!descriptors[to]) {
		return EBADF;
	}

	descriptors[to] = descriptors[from];
	descriptors[from] = undefined;

	return ESUCCESS;
}

export function fd_seek(fd, offset, whence, offset_ptr)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & FD_RIGHT_SEEK) == 0n) {
		return EPERM;
	}

	switch (whence) {
		case 0: /* WHENCE_CUR */
			descriptor.offset = BigInt(descriptor.offset) + BigInt(offset);
			break;
		case 1: /* WHENCE_END */
			descriptor.offset = BigInt(descriptor.size) + BigInt(offset);
			break;
		case 2: /* WHENCE_SET */
			descriptor.offset = BigInt(offset);
			break;
	}

	const view = new DataView(memory.buffer);
	view.setBigUint64(offset_ptr, descriptor.offset, true);

	return ESUCCESS;
}

export function fd_sync(fd)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_FD_SYNC) == 0n) {
		return EPERM;
	}

	return ESUCCESS;
}

export function fd_tell(fd, offset_ptr)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_FD_TELL) == 0n) {
		return EPERM;
	}

	const view = new DataView(memory.buffer);
	view.setUint32(offset_ptr, descriptor.offset);

	return ESUCCESS;
}

export function fd_write(fd, iovs_ptr, iovs_len, nwritten)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_FD_WRITE) == 0n) {
		return EPERM;
	}

	const view = new DataView(memory.buffer);

	let written = 0;
	for (let i = 0; i < iovs_len; i++) {
		const buf = view.getUint32(iovs);
		iovs += 4;

		const len = view.getUint32(iovs);
		iovs += 4;

		const data = new Uint8Array(memory.buffer, buf_ptr, len);
		written += descriptor.entry.write(data, descriptor.offset + written);
	}

	descriptor.offset += written;
	data.setUint32(nwritten, written);

	return ESUCCESS;
}

export function path_create_directory(fd, path_ptr, path_len)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_PATH_CREATE_DIRECTORY) == 0n) {
		return EPERM;
	}

	if (!descriptor.entry.isDirectory) {
		return ENOTDIR;
	}

	const path_data = new Uint8Array(memory.buffer, path_ptr, path_len);
	const path = decoder.decode(path_data);

	descriptor.entry.getDirectory(path, {
		create: true
	});

	return ESUCCESS;
}

export function path_filestat_get(fd, flags, path_ptr, path_len, stat_ptr)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_PATH_FILESTAT_GET) == 0n) {
		return EPERM;
	}

	// TODO

	return ESUCCESS;
}

export function path_filestat_set_times(fd, fstflags, path_ptr, path_ptr, statim, stmtim)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_PATH_SET_TIMES) == 0n) {
		return EPERM;
	}

	// TODO

	return ESUCCESS;
}

export function path_link(old_fd, old_flags, old_path_ptr, old_path_len, new_fd, new_path_ptr, new_path_len)
{
	const source = descriptors[old_fd];
	const target = descriptors[new_fd];

	if (!source) {
		return EBADF;
	}

	if (!target) {
		return EBADF;
	}

	if ((source.rights.base & RIGHT_PATH_LINK_SOURCE) == 0n) {
		return EPERM;
	}

	if ((target.rights.base & RIGHT_PATH_LINK_TARGET) == 0n) {
		return EPERM;
	}

	// TODO

	return ESUCCESS;
}

export function path_open(fd, dirflags, path_ptr, path_len, oflags, fs_rights_base, fs_rights_inheriting, fsflags, fd_ptr)
{
	const descriptor = descriptors[fd];
	if (!descriptor) {
		return EBADF;
	}

	if ((descriptor.rights.base & RIGHT_PATH_CREATE_DIRECTORY) == 0n) {
		return EPERM;
	}

	if (!descriptor.entry.isDirectory) {
		return ENOTDIR;
	}

	const path_data = new Uint8Array(memory.buffer, path_ptr, path_len);
	const path = decoder.decode(path_data);

	return ESUCCESS;
}

export function path_readlink(fd, path_ptr, path_len, buf_ptr, buf_len, bufused)
{
	return ESUCCESS;
}

export function path_remove_directory(fd, path_ptr, path_len)
{
	return ESUCCESS;
}

export function path_rename(old_fd, old_path_ptr, old_path_len, new_fd, new_path_ptr, new_path_len)
{
	return ESUCCESS;
}

export function path_symlink(old_path_ptr, old_path_len, fd, new_path_ptr, new_path_len)
{
	return ESUCCESS;
}

export function path_unlink_file(fd, path_ptr, path_len)
{
	return ESUCCESS;
}

export function proc_exit(rval)
{
	throw new ExitStatus(rval);
}

export function proc_signal(sig)
{
	return ENOSYS;
}

export function random_get(buf_ptr, buf_len)
{
	const heap = new Uint8Array(memory.buffer, buf_ptr, buf_len);
	crypto.getRandomValues(heap);

	return ESUCCESS;
}

export function sched_yield()
{
	return ESUCCESS;
}

export function sock_recv(fd, ri_data, ri_data_len, ri_flags, ro_datalen, ro_flags)
{
	return ENOSYS;
}

export function sock_send(fd, si_data, si_data_len, si_flags, so_datalen)
{
	return ENOSYS;
}

export function sock_shutdown(fd, how)
{
	return ENOSYS;
}
