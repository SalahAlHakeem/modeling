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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Student_1 = require("./models/Student");
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    //await connect(`mongodb+srv://azamrasulhujaev:LjxfjFRHNw560xel@cluster0.dktqc8r.mongodb.net/simplify`);
    yield (0, mongoose_1.connect)(`mongodb://localhost:27017/simplify`);
    const response = yield Student_1.StudentModel.create({
        fullName: 'Said Azam',
        email: 'saidAzam@gmail.com',
        groupId: null
    });
    console.log(response);
});
run();
