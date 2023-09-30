"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Config = {
    host: `${process.env.HOST}`,
    user: `${process.env.USER_DB}`,
    password: `${process.env.PASSWORD_DB}`,
    database: `${process.env.DATABASE_NAME}`,
    port: +`${process.env.PORT}`,
    multipleStatements: true
};
const client = new pg_1.Pool(Config);
exports.default = client;
