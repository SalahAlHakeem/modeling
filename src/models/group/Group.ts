import { ObjectId, Schema, model } from "mongoose";

export interface IGroup {
    index: string;            
    faculty: string;
}   

const GroupSchema = new Schema<IGroup> ({
    index: {type: String},
    faculty: {type: String},
});

export const GroupModel = model('Group', GroupSchema);
