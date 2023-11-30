import { Schema, model } from "mongoose";

type AssingmentType = 'homework' | 'classwork';

export interface IAssingment {
    type: AssingmentType;
    file: string;
    time: {
        publishedTime: Date;
        deadlineTime:  Date;
    },
    lessonId: string | null
}

const AssingmentSchema = new Schema<IAssingment>({
    type: {
        type: String,
        enum: ['homework', 'classwork'],
        default: 'homework'
    },
    file: {type: String},
    time: {
        publishedTime: Date,
        deadlineTime: Date
    },
    lessonId: {type: Schema.ObjectId, ref: 'Lesson'}
})

export const AssingmentModel = model('Assignment', AssingmentSchema);