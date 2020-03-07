export function advise(fd, offset, len, advice)
{
	return 52; /* ENOSYS */
}

export function allocate(fd, offset, len)
{
	return 52; /* ENOSYS */
}

export function close(fd)
{
	return 52; /* ENOSYS */
}

export function datasync(fd)
{
	return 52; /* ENOSYS */
}

export function fdstat_get(fd, buf)
{
	return 52; /* ENOSYS */
}

export function fdstat_set_flags(fd, flags)
{
	return 52; /* ENOSYS */
}

export function fdstat_set_rights(fd, fs_rights_base, fs_rights_inheriting)
{
	return 0; /* ESUCCESS */
}

export function filestat_get(fd, buf)
{
	return 52; /* ENOSYS */
}

export function filestat_set_size(fd, size)
{
	return 52; /* ENOSYS */
}

export function filestat_set_times(fd, atim, mtime, fst_flags)
{
	return 52; /* ENOSYS */
}

export function permissions_set(fd, permissions)
{
	return 52; /* ENOSYS */
}

export function pread(fd, iovs, iovs_len, offset, nread)
{
	return 52; /* ENOSYS */
}

export function prestat_get(fd, buf)
{
	return 52; /* ENOSYS */
}

export function prestat_dir_name(fd, path, path_len)
{
	return 52; /* ENOSYS */
}

export function pwrite(fd, iovs, iovs_len, offset, nwritten)
{
	return 52; /* ENOSYS */
}

export function read(fd, iovs, read)
{
	return 52; /* ENOSYS */
}

export function readdir(fd, buf, buf_len, cookie, bufused)
{
	return 52; /* ENOSYS */
}

export function renumber(fd, to)
{
	return 52; /* ENOSYS */
}

export function seek(fd, offset, whence, newoffset)
{
	return 52; /* ENOSYS */
}

export function sync(fd)
{
	return 52; /* ENOSYS */
}

export function tell(fd, offset)
{
	return 52; /* ENOSYS */
}

export function write(fd, iovs, iovs_len, nwritten)
{
	return 52; /* ENOSYS */
}