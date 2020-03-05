WebAssembly System Interface for the Web
========================================
An extended implementation of the WebAssembly System Interface (WASI) for web browsers.

Example
-------

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
				  "env": "path/to/module.wasm",
				  "wasi_args": "path/to/wasi/args.js",
				  "wasi_clock": "path/to/wasi/clock.js",
				  "wasi_environ": "path/to/wasi/environ.js",
				  "wasi_random": "path/to/wasi/random.js",
				  "wasi_sched": "path/to/wasi/sched.js",
				  "wasi_sock": "path/to/wasi/sock.js"
			  }
		  }
	  </script>
	  <script type="module" src="path/to/module.wasm"></script>
	</head>
	<body>

	</body>
	</html>
