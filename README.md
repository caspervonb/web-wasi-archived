# WebAssembly System Interface for the Web

This project aims to provide a complete standalone (as in no external
dependencies) implementation of the [WebAssembly System
Interface](https://github.com/webassembly/wasi) for modern web browsers that
implement the [import-maps](https://github.com/wicg/import-maps) and
[esm-integration](https://github.com/webassembly/esm-integration) proposals.

Other optional runtime capabilities may also depend on specific proposals being
implemented in the browser; for example getting access to the user's file
system depends on the [native-file-system](https://github.com/WICG/native-file-system)
proposal being implemented as there is no other way of getting access to the
user's native file-system.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<title>Hello, world!</title>
<script type="importmap">
{
	"imports": {
		"env": "path/to/module",
		"wasi": "path/to/wasi"
	}
}
</script>

<script type="text/javascript">
// Optional; may be defined to provide command line arguments.
self.argv = [
	"hello",
	"world",
];

// Optional; may be defined to provide environment variables.
self.env = {
	"USER": "user",
	"LOGNAME": "user",
	"PATH": "/",
	"PWD": "/home/user",
	"HOME": "/home/user",
};

// Optional; may be defined to provide access to external directories.
self.preopen = {
	"/home/user": await self.getSystemDirectory({
		type: "sandbox",
	}),
};
</script>

<script type="module" src="path/to/module.wasm"></script>
</head>
<body>

</body>
</html>
```
