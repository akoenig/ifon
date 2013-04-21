# ifon

ifon - yes, I know. Sounds a little bit like a famous Smartphone, but check your pronunciation. It is "if on" (: - is an application which observes your internet connection and executes applications in the respective status. "If online, execute these apps - If offline, execute these app.".

**Platforms:** Note that this is a very first draft and only has Linux support at the moment. Feel free to contribute handlers for the other platforms if you like the idea.

## Installation

    $ npm install -g ifon

## Configuration

Create a configuration file in your home directory which has the following structure:

	```json
	{
		"online": {
			"execute" : ["app1","app2"]
		},
		"offline": {
			"execute": ["app1","app2"]
		}
	}

## Usage

	$ ifon

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

Copyright (c) 2013, [André König](http://iam.andrekoenig.info)

## Changelog

### v0.1.0 (20130421)

- First rudimentary Linux support.
- Initial release.