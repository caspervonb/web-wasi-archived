export function create_directory(fd, path, path_len)
{
	return 52; /* ENOSYS */
}

export function filestat_get(fd, flags, path, path_len, buf)
{
	return 52; /* ENOSYS */
}

export function filestat_set_times(fd, flags, path, path_len, atim, mtim, fst_flags)
{
	return 52; /* ENOSYS */
}

export function permissions_set(fd, flags, path, path_len, permissions)
{
	return 52; /* ENOSYS */
}

export function link(old_fd, old_flags, old_path, old_path_len, new_fd, new_path, new_path_len)
{
	return 52; /* ENOSYS */
}

export function open(fd, dirflags, path, path_len, oflags, fs_rights_base, fs_rights_inheriting, fdflags, permissions, opened_fd)
{
	return 52; /* ENOSYS */
}

export function readlink(fd, path, path_len, buf, buf_len, bufused)
{
	return 52; /* ENOSYS */
}

export function remove_directory(fd, path, path_len)
{
	return 52; /* ENOSYS */
}

export function rename(old_fd, old_path, old_path_len, new_fd, new_path, new_path_len)
{
	return 52; /* ENOSYS */
}

export function symlink(old_path, old_path_len, fd, new_path, new_path_len)
{
	return 52; /* ENOSYS */
}

export function unlink_file(fd, path_ptr, path_len)
{
	return 52; /* ENOSYS */
}