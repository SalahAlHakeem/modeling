import { StudentModel, IStudent} from "../models/student/Student";
import { ObjectId } from "mongoose";

export type Optional<T> = {
    [key in keyof T]?: T[key];
}

type UpdatingFields = Omit<Optional<IStudent>, 'groupId'>;

class StudentController {
    public static createStudent(data: IStudent) {}

    public static changeStudentGroup(userId: ObjectId, groupId: ObjectId) {}

    public static updateStudent(userId: ObjectId, updatingFields: UpdatingFields) {
        StudentModel.updateOne({_id: userId}, {$set: {"email": updatingFields.email}})    
    }
}

