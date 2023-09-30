"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const dotenv_1 = __importDefault(require("dotenv"));
const createTables_1 = __importDefault(require("./src/db/createTables"));
dotenv_1.default.config();
const server = app_1.default.listen(+`${process.env.PORT_SERV}`, () => {
    console.log('server is listen in port ' + `${process.env.PORT_SERV}`);
});
(0, createTables_1.default)();
