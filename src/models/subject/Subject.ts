import {ObjectId, Schema, model} from 'mongoose';

interface ISubject {
    title: string;
    durationTime: {
        beginning: Date;
        ending: Date;
    },
    faculty: string;
    teacherId: ObjectId
}

const SubjectSchema = new Schema<ISubject>({
    title: {type: String},
    durationTime: {
        beginning: {type: Date},
        ending: {type: Date}
    },
    faculty: {type: String},
    teacherId: {type: Schema.Types.ObjectId, ref: 'Teacher'}
});

export const SubjectModel = model('Subject', SubjectSchema);