/*
 * ifon (if online)
 *
 * Observes your internet connection and executes configured apps
 * if you're online or offline.
 *
 * Copyright(c) 2013 André König <andre.koenig@gmail.com>
 * MIT Licensed
 *
 */

var events = require('events'),
	shell  = require('child_process').spawn,
    util   = require('util');

module.exports = function () {
	'use strict';

	function LinuxHandler () {
		var cmd,
			that = this;

		events.EventEmitter.call(this);

		// Command: ip monitor link
		cmd = shell('ip', ['monitor', 'link']);

		cmd.stdout.on('data', function (data) {
			var online, offline;

			data = data.toString();

			online = data.indexOf("state UP") !== -1;
			offline = data.indexOf("state DOWN") !== -1;

			if (online) {
				that.emit('online');
			} else if (offline) {
				that.emit('offline');
			}
		});
	}

	util.inherits(LinuxHandler, events.EventEmitter);

	return LinuxHandler;
};