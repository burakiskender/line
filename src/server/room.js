import * as _ from 'lodash';
import Message from '../lib/message';


export default class Room {
	constructor(name, connections = {}) {
		this.name = name;
		this.connections = connections;
	}

	add(connection) {
		this.connections[connection.id] = connection;
	}

	remove(connection) {
		delete this.connections[connection.id];
	}

	getConnectionById(connectionId) {
		return this.connections[connectionId];
	}

	getConnectionsCount() {
		return Object.keys(this.connections).length;
	}

	broadcast_(message) {
		_.forEach(this.connections, connection => {
			connection.send_(message)
		});
	}

	broadcast(eventName, payload) {
		const message = new Message({name: eventName, payload});
		_.forEach(this.connections, (connection, index) => {
			connection.send_(message)
		});
	}
}
