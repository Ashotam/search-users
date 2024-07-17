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
exports.userService = void 0;
const user_1 = __importDefault(require("../models/user"));
exports.userService = {
    searchUsers: (email, number) => __awaiter(void 0, void 0, void 0, function* () {
        const query = { email };
        if (number) {
            query.number = number;
        }
        try {
            const users = yield user_1.default.find(query).exec();
            if (users.length === 0) {
                throw new Error('No user found with the specified email and number');
            }
            return users;
        }
        catch (error) {
            throw new Error(`Error searching users ${error.message}`);
        }
    })
};
