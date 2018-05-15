'use strict';

const PacifyPlaylist = require('./lib');

const pacifyPlaylist = new PacifyPlaylist();

const run = async () => {

    await pacifyPlaylist.start();
    console.log(`Server running at ${pacifyPlaylist.server.info.uri}`);
};

run();
