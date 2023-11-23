
import { ObjectId, Schema, model } from "mongoose";

type AttendanceStatus = 'on-time' | 'late' | 'absent';

interface IAttendance {
    studentId: ObjectId;
    status: AttendanceStatus;
    time: Date;
}

const AttendanceSchema = new Schema<IAttendance>({
    studentId: {type: Schema.Types.ObjectId, ref: 'Student'},
    status: ['absent', 'on-time', 'late'],
    time: {type: Date}
});

export const AttendanceModel = model('Attendance', AttendanceSchema);