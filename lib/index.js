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

var path = require('path'),
    fs   = require('fs');

module.exports = function (pkg, configFile) {

    'use strict';

    var handlers = {},
        defaults = {};

    // Init the handlers
    handlers.linux = require(path.join(__dirname, 'linux'))();

    // Init the default configuration.
    defaults.online = {
        execute: ["app1", "app2"]
    };

    defaults.offline = {
        execute: ["app1", "app2"]    
    };

    return {
        init : function (configFile, cb) {
            fs.exists(configFile, function (exists) {
                var config,
                    Handler;

                if (!exists) {
                    fs.writeFile(configFile, JSON.stringify(defaults));

                    return cb('Configuration is not available. Configure ' + configFile);
                } else {
                    try {
                        config = require(configFile);
                    } catch (e) {
                        return cb('Configuration file is not valid.');
                    }

                    Handler = handlers[process.platform];

                    if (!Handler) {
                        return cb('OS not supported');
                    }

                    cb(null, config, new Handler());
                }
            });
        }
    };
};