import { ObjectId, Schema, model } from "mongoose";

interface IGroup {
    index: string;            
    faculty: string;
    students: Array<ObjectId>; 
}   

const GroupSchema = new Schema<IGroup> ({
    index: {type: String},
    faculty: {type: String},
    students: {type: [Schema.Types.ObjectId]}
});

export const GroupModel = model('Group', GroupSchema);
