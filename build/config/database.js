"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
exports.pool = promise_1.default.createPool({
    connectionLimit: 10,
    host: 'alvin-server-db.c0oxos7bxraw.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'a8856018',
    database: 'Alvin_Server_RDS'
});
