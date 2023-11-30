import { Schema, model} from 'mongoose';

export interface ISubject {
    title: string;
    durationTime: {
        beginning: Date;
        ending: Date;
    },
    groupId: string | null;
    faculty: string;
    teacherId: string | null;
    isCompleted: boolean;
}

const SubjectSchema = new Schema<ISubject>({
    title: {type: String},
    durationTime: {
        beginning: {type: Date},
        ending: {type: Date}
    },
    groupId: { type: Schema.Types.ObjectId, ref: 'Group'},
    faculty: {type: String},
    teacherId: {type: Schema.Types.ObjectId, ref: 'Teacher'},
    isCompleted: {type: Schema.Types.Boolean}
});

export const SubjectModel = model('Subject', SubjectSchema);