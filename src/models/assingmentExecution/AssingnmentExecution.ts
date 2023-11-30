import { ObjectId, Schema, model} from "mongoose";

type AssingmentStatus = 'completed' | 'pending';

export interface IAssingmentExecution {
    assingmentId: ObjectId;
    studentId: ObjectId;
    status: AssingmentStatus;
    grade: number;
    completedAt: Date;
}

const AssingmentExecutionSchema = new Schema<IAssingmentExecution>({
    assingmentId: {type: Schema.Types.ObjectId, ref: 'Assingment'},
    studentId: {type: Schema.Types.ObjectId, ref: 'Student'},
    status: ['completed', 'pending'],
    grade: {type: Number},
    completedAt: {type: Date}
});

export const AssingmentExecution = model('AssingmentExecution', AssingmentExecutionSchema);
