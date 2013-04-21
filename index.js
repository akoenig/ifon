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

var path    = require('path'),
    shell   = require('child_process'),
    pkg     = require(path.join(__dirname, 'package.json')),
    homeDir = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'],
    ifon    = require(path.join(__dirname, 'lib'))();

ifon.init(path.join(homeDir, '.ifonrc.json'), function (err, config, connection) {
    'use strict';

    if (err) {
        return console.log(err);
    }

    function _execute (status) {
        console.log("%s - Mode: %s", pkg.name, status.toUpperCase());

        if (config[status] && config[status].execute && config[status].execute.length) {
            config[status].execute.forEach(function (app) {
                shell.exec(app, function (err, stdout, stderr) {
                    if (err) {
                        return console.error("%s - Execution failed: %s", pkg.name, stderr);
                    }

                    console.log("%s - Executed: %s", pkg.name, app);
                });
            });
        }
    }

    connection.on("online", function () {
        _execute('online');
    });

    connection.on("offline", function () {
        _execute('offline');
    });

    console.log("Started %s (%d)", pkg.name, Date.now());
});