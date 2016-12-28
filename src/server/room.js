const forEach = require('lodash/forEach');
const clone = require('lodash/clone');
const Message = require('../lib/message');


/**
 * Line room class.
 *
 * @private
 * @class ServerRoom
 * @param {string} name Room name
 * @property {string} name
 */
class ServerRoom {
    constructor(name, connections = {}) {
        this.name = name;
        this.connections = connections;
    }


    /**
     * Adds a connection into room.
     * @param {ServerConnection} connection
     */
    add(connection) {
        this.connections[connection.id] = connection;
    }


    /**
     * Removes a connection from room.
     * @param {ServerConnection} connection
     */
    remove(connection) {
        delete this.connections[connection.id];
    }


    /**
     * Gets a connection by id.
     * @param {string} connectionId
     * @returns {?ServerConnection}
     */
    getConnectionById(connectionId) {
        return this.connections[connectionId];
    }


    /**
     * Gets all connections in the room. Returns a object where keys are
     * connection id and values are ServerConnection.
     * @returns {{string: ServerConnection}}
     */
    getConnections() {
        return clone(this.connections);
    }


    /**
     * Returns the total connection count in room.
     * @returns {number}
     */
    getConnectionsCount() {
        return Object.keys(this.connections).length;
    }

    broadcast_(message) {
        forEach(this.connections, connection => {
            connection.send_(message)
        });
    }


    /**
     * Broadcast a message to all connections in the room.
     * @param {string} eventName
     * @param {any=} payload
     */
    broadcast(eventName, payload) {
        const message = new Message({name: eventName, payload});
        forEach(this.connections, (connection, index) => {
            connection.send_(message)
        });
    }
}


module.exports = ServerRoom;
