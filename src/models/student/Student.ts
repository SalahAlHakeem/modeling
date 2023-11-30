import { Schema, model } from "mongoose";

export interface IStudent {
    fullName: string;
    email:    string;
    faculty:  string;
    groupId:  null | string; 
}

const StudentSchema = new Schema<IStudent>({
    fullName: {type: String},
    email: {type: String},
    faculty: {type: String},
    groupId: {type: Schema.Types.ObjectId, ref: 'Group'}
});

export const StudentModel = model('Student', StudentSchema);