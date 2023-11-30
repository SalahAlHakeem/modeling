
import { ObjectId, Schema, model } from "mongoose";

type AttendanceStatus = 'on-time' | 'late' | 'absent';

interface IAttendance {
    studentId: string | null;
    lessonId: string | null;
    status: AttendanceStatus;
}

const AttendanceSchema = new Schema<IAttendance>({
    studentId: {type: Schema.Types.ObjectId, ref: 'Student'},
    lessonId: {type: Schema.Types.ObjectId, ref: 'Lesson'},
    status: ['absent', 'on-time', 'late'],
});

export const AttendanceModel = model('Attendance', AttendanceSchema);