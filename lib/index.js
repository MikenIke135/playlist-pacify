'use strict';

require('dotenv').config();
const Hapi = require('hapi');
const Hoek = require('hoek');
const Path = require('path');

/** Class representing the Response Action Proxy */
class PlaylistPacify {

    /**
     * Create a Response Action Proxy Service
     * @param {*} options
     */
    constructor(options) {

        typeof options !== 'object' ? (options = {}) : (options = options);
        const defaults = {
            port: process.env.PORT || 8080,
            host: process.env.HOST || 'localhost'
        };

        const config = Hoek.applyToDefaults(defaults, options); 

        const client_id = process.env.CLIENT_ID; // Your client id
        const client_secret = process.env.CLIENT_ID_KEY; // Your secret
        const redirect_uri = process.env.REDIRECT_URI; // Your redirect uri

        const server = Hapi.server({
            port: config.port,
            host: config.host
        });

        server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {

                return 'hello world!';
            }
        });

        server.route({
            method: 'GET',
            path: '/login',
            handler: (request, h) => {

                // TODO: Write a cookie here for easy use of app
                return 'hello login!';
            }
        });

        this.server = server;
    };

    /**
     * Start the Response Action Proxy
     */
    async start() {

        try {
            await this.server.start();
        }
        catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * Stop the Response Action Proxy
     */
    async stop() {

        await this.server.stop({ timeout: 2 * 1000 });
    }
}

module.exports = PlaylistPacify;
