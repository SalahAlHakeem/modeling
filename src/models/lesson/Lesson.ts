import {Schema, model} from 'mongoose';

export interface ILesson {
    title: string;
    description: string;
    subjectId: string | null;
    durationTime: {
        beginning: Date;
        ending: Date;
    }
}

const LessonSchema = new Schema<ILesson>({
    title: {type: String},
    description: {type: String},
    subjectId: {type: Schema.Types.ObjectId, ref: 'Subject'},
    durationTime: {
        beginning: {type: Date},
        ending: {type: Date}
    }
})

export const LessonModel = model('Lesson', LessonSchema);