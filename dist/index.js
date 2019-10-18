"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var apollo_server_1 = require("apollo-server");
var server = new apollo_server_1.ApolloServer({});
server.listen().then(function () { return console.log('graphql server running'); });
//# sourceMappingURL=index.js.map