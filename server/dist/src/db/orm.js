"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const connectiondb_1 = __importDefault(require("./connectiondb"));
class User {
    constructor({ username, password, gender, sexualPreferences, bio, interesting, email, rating }) {
        this.username = username;
        this.gender = gender || '';
        this.sexualPreferences = sexualPreferences || '';
        this.bio = bio || '';
        this.interesting = interesting || [];
        this.email = email;
        this.rating = rating || '';
        this.password = password;
    }
}
exports.User = User;
class Orm {
    constructor(user) {
        this.connection = connectiondb_1.default;
        this.user = user;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO users (username,password, gender,sexualPreferences, bio, interesting, email, rating )
            VALUES ($1, $2, $3, $4 ,$5, $6, $7, $8);
        `;
            const values = [
                this.user.username,
                this.user.password,
                this.user.gender,
                this.user.sexualPreferences,
                this.user.bio,
                this.user.interesting,
                this.user.email,
                this.user.rating
            ];
            try {
                const response = yield this.connection.query(query, values);
                console.log(response);
            }
            catch (err) {
                console.log(err.message);
                return err.message;
            }
        });
    }
}
exports.default = Orm;
