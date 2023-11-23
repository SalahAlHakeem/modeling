import { ObjectId, Schema, model } from "mongoose";

interface ITeacher {
    fullName: string;
    email:    string;
    faculty:  string;
    groups:   Array<ObjectId>;
}

const TeacherSchema = new Schema<ITeacher>({
    fullName: {type: String},
    email: {type: String},
    faculty: {type: String},
    groups: {type: [Schema.Types.ObjectId]}
});

export const TeacherModel = model('Teacher', TeacherSchema);