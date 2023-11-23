import {ObjectId, Schema, model} from 'mongoose';

interface ILesson {
    title: string;
    description: string;
    groupId: ObjectId;
    subjectId: ObjectId;
    durationTime: {
        beginning: Date;
        ending: Date;
    };
    attendance: Array<ObjectId>;
    assingments: Array<ObjectId>;
}

const LessonSchema = new Schema<ILesson>({
    title: {type: String},
    description: {type: String},
    groupId: {type: Schema.Types.ObjectId, ref: 'Group'},
    subjectId: {type: Schema.Types.ObjectId, ref: 'Subject'},
    durationTime: {
        beginning: {type: Date},
        ending: {type: Date}
    },
    assingments: {type: [Schema.ObjectId]},
    attendance: {type: [Schema.ObjectId]}
})

export const LessonModel = model('Lesson', LessonSchema);