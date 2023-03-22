const http = require('http');

const app = require('./src/app');

const stoppable = require('stoppable');

const gracefulShutdown = require('./src/utils/graceful-shutdown.util');

const port = normalizePort(process.env.PORT || 3000);

app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);

process.on('SIGINT', async () => {
    console.info('Got SIGINT (aka ctrl+c in docker). Graceful shutdown', new Date().toISOString());
    await gracefulShutdown(stoppable(server));
});

process.on('SIGTERM', async () => {
    console.log('Got SIGTERM (docker container stop).Graceful shutdown', new Date().toISOString());
    await gracefulShutdown(stoppable(server));
});
