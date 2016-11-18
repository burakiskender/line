module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(14),c=n(7),l=o(c),f=n(9),d=o(f),h=n(1),p=o(h),v=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.rooms=new d.default,n.options=Object.assign({timeout:3e4,maxReconnectDelay:60,initialReconnectDelay:1,reconnectIncrementFactor:1},e||{}),n}return s(t,e),a(t,[{key:"start",value:function(){var e=this;return this.options.port?new Promise(function(t,n){e.server=new u.Server(e.options,function(o){return o?n(o):(e.bindEvents(),void t())})}):(this.server=new u.Server(this.options),this.bindEvents(),Promise.resolve())}},{key:"stop",value:function(){var e=this;if(!this.server){var t=new Error("Could not stop server. Server is probably not started, or already stopped.");return Promise.reject(t)}return new Promise(function(t){e.server.close(),e.server=null,t()})}},{key:"bindEvents",value:function(){this.server.on("connection",this.onConnection.bind(this))}},{key:"onConnection",value:function(e){var t=this,n=new l.default(e,this);n.on("_handshakeOk",function(){return t.emit("connection",n)})}},{key:"getConnectionById",value:function(e){return this.rooms.getRoom("/").getConnectionById(e)}},{key:"broadcast",value:function(e,t){return this.rooms.getRoom("/").broadcast(e,t)}}]),t}(p.default);e.exports=v},function(e,t){e.exports=require("event-emitter-extra")},function(e,t){e.exports=require("lodash/forEach")},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(12),l=r(c),f=n(5),d=o(f),h=n(1),p=r(h),v=function(e){function t(e){var n=e.name,o=e.payload,r=e.id,a=e.err;i(this,t);var u=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return u.name=n,u.payload=o,u.id=r,u.err=a,u.isResponded_=!1,u}return a(t,e),u(t,null,[{key:"parse",value:function(e){try{var n=JSON.parse(e);return new t({name:n.n,payload:n.p,err:n.e,id:n.i})}catch(e){throw new Error("Could not parse message.")}}}]),u(t,[{key:"setId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.v4();return this.id=e,e}},{key:"createResponse",value:function(e,n){return new t({name:"_r",payload:n,err:e,id:this.id})}},{key:"resolve",value:function(e){return(0,l.default)(this.id)?console.warn("[line] A message without an id cannot be resolved."):this.isResponded_?console.warn("[line] This message has already been ended."):(this.isResponded_=!0,void this.emit("resolved",e))}},{key:"reject",value:function(e){return(0,l.default)(this.id)?console.warn("[line] A message without an id cannot be rejected."):this.isResponded_?console.warn("[line] This message has already been ended."):(this.isResponded_=!0,void this.emit("rejected",e))}},{key:"toString",value:function(){try{var e={n:this.name};return(0,l.default)(this.payload)||(e.p=this.payload),(0,l.default)(this.id)||(e.i=this.id),(0,l.default)(this.err)||(e.e=this.err),JSON.stringify(e)}catch(e){throw new Error("Could not stringify message.")}}},{key:"dispose",value:function(){var e=this,t=this.eventNames();t.forEach(function(t){return e.removeAllListeners(t)})}}]),t}(p.default);t.default=v,v.reservedNames=["_r","_h","_h2"]},function(e,t){e.exports=require("lodash/assign")},function(e,t){e.exports=require("node-uuid")},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return new Promise(function(t){return setTimeout(function(e){return t()},e)})}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={maxDelay:160,maxCount:0,initialDelay:3,increaseFactor:2};t=(0,a.default)(n,t);var o=void 0,i=1,s=t.initialDelay,u=function n(){return e().catch(function(e){if(i++,s*=t.increaseFactor,0!=t.maxCount&&i>t.maxCount)throw o&&clearTimeout(o),e;return r(1e3*s/2).then(function(e){return n()})})};return u()}var s=n(4),a=o(s);e.exports={promiseDelay:r,retry:i}},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),l=r(c),f=n(3),d=r(f),h=n(1),p=r(h),v=n(4),m=r(v),y=n(2),b=r(y),_=n(11),w=r(_),k=n(5),g=o(k),O=function(e){function t(e,n){i(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.id=g.v4(),o.socket=e,o.server=n,o.promiseCallbacks={},o.socket.on("message",o.onMessage.bind(o)),o.socket.on("error",o.onError.bind(o)),o.socket.on("close",o.onClose.bind(o)),o.handshake_=!1,l.default.retry(function(e){return o.send("_h",{id:o.id,timeout:o.server.options.timeout,maxReconnectDelay:o.server.options.maxReconnectDelay,initialReconnectDelay:o.server.options.initialReconnectDelay,reconnectIncrementFactor:o.server.options.reconnectIncrementFactor})},{maxCount:3,initialDelay:1,increaseFactor:1}).then(function(e){return o.sendWithoutResponse("_h2")}).then(function(e){o.joinRoom("/"),o.handshake_=!0,o.emit("_handshakeOk")}).catch(function(e){o.handshake_=!1,console.log("Handshake failed for "+o.id+"."),o.onClose(500,e)}),o}return a(t,e),u(t,[{key:"onMessage",value:function(e,t){var n=this,o=d.default.parse(e);if(!o.id&&d.default.reservedNames.indexOf(o.name)==-1)return this.emit(o.name,o);if("_r"==o.name&&this.promiseCallbacks[o.id]){var r=this.promiseCallbacks[o.id],i=r.resolve,s=r.reject,a=r.timeout;if(clearTimeout(a),o.err){var u=(0,m.default)(new Error,o.err);s(u)}else i(o.payload);return void delete this.promiseCallbacks[o.id]}o.once("resolved",function(e){n.send_(o.createResponse(null,e)),o.dispose()}),o.once("rejected",function(e){(0,w.default)(e)&&e instanceof Error&&"Error"==e.name&&(e={message:e.message,name:"Error"}),n.send_(o.createResponse(e)),o.dispose()}),this.emit(o.name,o)}},{key:"onError",value:function(e){this.emit("_error",e)}},{key:"onClose",value:function(e,t){this.server.rooms.removeFromAll(this),(0,b.default)(this.promiseCallbacks,function(e){e.reject(new Error("Socket connection closed!"))}),this.promiseCallbacks={},this.emit("_close",e,t)}},{key:"joinRoom",value:function(e){this.server.rooms.add(e,this)}},{key:"leaveRoom",value:function(e){this.server.rooms.remove(e,this)}},{key:"getRooms",value:function(){this.server.rooms.getRoomsOf(this)}},{key:"send",value:function(e,t){var n=this,o=new d.default({name:e,payload:t}),r=o.setId();return this.send_(o).then(function(e){return new Promise(function(e,t){var o=setTimeout(function(e){if(n.promiseCallbacks[r]){var t=n.promiseCallbacks[r],o=t.reject,i=t.timeout;clearTimeout(i),o(new Error("Timeout reached")),delete n.promiseCallbacks[r]}},n.server.options.timeout);n.promiseCallbacks[r]={resolve:e,reject:t,timeout:o}})})}},{key:"sendWithoutResponse",value:function(e,t){var n=new d.default({name:e,payload:t});return this.send_(n)}},{key:"send_",value:function(e){var t=this;return new Promise(function(n,o){t.socket.send(e.toString(),function(e){return e?o(e):void n()})})}}]),t}(p.default);e.exports=O},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),a=o(s),u=n(3),c=o(u),l=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e),this.name=t,this.connections=n}return i(e,[{key:"add",value:function(e){this.connections[e.id]=e}},{key:"remove",value:function(e){delete this.connections[e.id]}},{key:"getConnectionById",value:function(e){return this.connections[e]}},{key:"getConnectionsCount",value:function(){return Object.keys(this.connections).length}},{key:"broadcast_",value:function(e){(0,a.default)(this.connections,function(t){t.send_(e)})}},{key:"broadcast",value:function(e,t){var n=new c.default({name:e,payload:t});(0,a.default)(this.connections,function(e,t){e.send_(n)})}}]),e}();t.default=l},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(10),a=o(s),u=n(2),c=o(u),l=n(13),f=o(l),d=n(8),h=o(d),p=function(){function e(){r(this,e),this.rooms={"/":new h.default("/")}}return i(e,[{key:"add",value:function(e,t){this.rooms[e]||(this.rooms[e]=new h.default(e)),this.rooms[e].add(t)}},{key:"remove",value:function(e,t){this.rooms[e]&&(this.rooms[e].remove(t),"/"==e||this.rooms[e].getConnectionsCount()||delete this.rooms[e])}},{key:"getRoomsOf",value:function(e){return(0,f.default)((0,a.default)(this.rooms,function(t){return t.getConnectionById(e.id)}),"name")}},{key:"getRoom",value:function(e){return this.rooms[e]}},{key:"removeFromAll",value:function(e){var t=this,n=this.getRoomsOf(e);(0,c.default)(n,function(n){return t.rooms[n].remove(e)})}}]),e}();t.default=p},function(e,t){e.exports=require("lodash/filter")},function(e,t){e.exports=require("lodash/isObject")},function(e,t){e.exports=require("lodash/isUndefined")},function(e,t){e.exports=require("lodash/map")},function(e,t){e.exports=require("uws")}]);
//# sourceMappingURL=server.js.map