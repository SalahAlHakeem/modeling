import { ObjectId, Schema, model } from "mongoose";

type AssingmentType = 'homework' | 'classwork';

export interface IAssingment {
    type: AssingmentType;
    file: string;
    time: {
        publishedTime: Date;
        deadlineTime:  Date;
    },
    executedAssingments: Array<ObjectId>
}

const AssingmentSchema = new Schema<IAssingment>({
    type: ['classwork', 'homework'],
    file: {type: String},
    time: {
        publishedTime: Date,
        deadlineTime: Date
    },
    executedAssingments: [Schema.Types.ObjectId]
})

export const AssingmentModel = model('Assignment', AssingmentSchema);