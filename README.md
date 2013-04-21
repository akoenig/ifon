# ifon

ifon – yes, I know. Sounds a little bit like a famous Smartphone, but check your pronunciation. It is "if on" (: – is an application which observes your internet connection and executes applications in the respective status. "If online, execute these apps - If offline, execute these apps."

**Platforms:** Note that this is a very first draft and only has support for the Linux platform at the moment. Feel free to contribute handlers for the other platforms if you like the idea (:

## Installation

    $ npm install -g ifon

## Configuration

Create a configuration file in your home directory:

	$ vi ~/.ifonrc.json

Add the following configuration structure:

	{
		"online": {
			"execute" : ["your_app1", "your_app2"]
		},
		"offline": {
			"execute" : ["your_app1", "your_app2"]
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