import { Schema, model } from "mongoose";

export interface ITeacher {
    fullName: string;
    email:    string;
    faculty:  string;
}

const TeacherSchema = new Schema<ITeacher>({
    fullName: {type: String},
    email: {type: String},
    faculty: {type: String},
});

export const TeacherModel = model('Teacher', TeacherSchema);