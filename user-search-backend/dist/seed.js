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
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const user_1 = __importDefault(require("./models/user"));
dotenv_1.default.config();
// MongoDB connection setup
const uri = config_1.config.MONGODB_URI || "";
if (!uri) {
    console.error('MongoDB URI is not defined in the environment variables.');
    process.exit(1);
}
function seedUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(uri);
            const initialUsers = [
                { email: 'jim@gmail.com', number: '221122' },
                { email: 'jam@gmail.com', number: '830347' },
                { email: 'john@gmail.com', number: '221122' },
                { email: 'jams@gmail.com', number: '349425' },
                { email: 'jams@gmail.com', number: '141424' },
                { email: 'jill@gmail.com', number: '822287' },
                { email: 'jill@gmail.com', number: '822286' },
            ];
            yield user_1.default.deleteMany({});
            yield user_1.default.insertMany(initialUsers);
            console.log('Seed data inserted successfully');
        }
        catch (error) {
            console.error('Error seeding database:', error);
        }
        finally {
            yield mongoose_1.default.disconnect();
        }
    });
}
seedUsers();
