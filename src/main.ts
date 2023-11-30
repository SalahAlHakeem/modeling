import {connect} from 'mongoose';
import {IStudent, StudentModel} from './models/student/Student';
import { ISubject, SubjectModel } from './models/subject/Subject';
import { IGroup } from './models/group/Group';
import { ITeacher, TeacherModel } from './models/teacher/Teacher';
import { AssingmentModel, IAssingment } from './models/assingment/Assingment';
import { ILesson, LessonModel } from './models/lesson/Lesson';
import colors from 'colors';

const run = async () => {
    //const connection = await connect(`mongodb+srv://azamrasulhujaev:LjxfjFRHNw560xel@cluster0.dktqc8r.mongodb.net/simplify`);
    const connection = await connect(`mongodb://localhost:27017/simplify`)

    const group_01 = '656465b8b19b55314c90c2a9';
    const group_02 = '656465b8b19b55314c90c2ab';
    const group_03 = '656465b8b19b55314c90c2ad';
    const faculties: [string, string, string] = ['Computer Science', 'Dental School', 'Architecture'];

    const students: IStudent[] = [
        {
            fullName: 'David Goggins',
            email: 'davidGoggins@gmail.com',
            groupId: group_01,
            faculty: faculties[0]
        },
        {
            fullName: 'Steve Kelvin',
            email: 'steveKelvin@gmail.com',
            groupId: group_01,
            faculty: faculties[0]
        },
        {
            fullName: 'Robert Deniero',
            email: 'robertDenieru@gmail.com',
            groupId: group_02,
            faculty: faculties[0]
        },
        {
            fullName: 'Alexandra Kosminina',
            email: 'alexandraKosminina@gmail.com',
            groupId: group_01,
            faculty: faculties[0]
        }
    ];

    const teacher_01 ='6564670d82ebb4d449cbc58e'

    const subjects: ISubject[] = [
        {
            title: 'DevOps essentials with Docker and Kubernetes',
            durationTime: {
                beginning: new Date(2023, 12, 10),
                ending: new Date(2024, 2, 10)
            },
            teacherId: teacher_01,
            isCompleted: false,
            faculty: faculties[0],
            groupId: group_01
        },
        {
            title: 'DevOps essentials with Docker and Kubernetes',
            durationTime: {
                beginning: new Date(2023, 1, 10),
                ending: new Date(2024, 1, 10)
            },
            teacherId: teacher_01,
            isCompleted: false,
            faculty: faculties[0],
            groupId: group_02
        }
    ];

    const groups: IGroup[] = [
        {
            index: '2023-01',
            faculty: faculties[0]
        },
        {
            index: '2023-02',
            faculty: faculties[0]
        },
        {
            index: '2023-03',
            faculty: faculties[0]
        }
    ];

    const teachers: ITeacher[] = [
        {
            fullName: 'Damir Burangulov',
            faculty: faculties[0],
            email: 'damirBurangulov@gmail.com'
        },
        {
            fullName: 'Anton Konovalov',
            faculty: faculties[0],
            email: 'antonKonovalod@gmail.com'
        },
        {
            fullName: 'Abraham Limson',
            faculty: faculties[0],
            email: 'abrahamLimson@gmail.com'
        }
    ]

    const assingments: IAssingment[] = [
        {
            type: 'homework',
            lessonId: '656830269f402e5de898f9c5',
            file: 'homeworks/docker_01.txt',
            time: {
                publishedTime: new Date(),
                deadlineTime: new Date(2023, 2, 15)
            }
        },
        {
            type: 'classwork',
            lessonId: '656830269f402e5de898f9c5',
            file: 'homeworks/docker_02.txt',
            time: {
                publishedTime: new Date(),
                deadlineTime: new Date(2023, 2, 12)
            }
        }
    ];

    const lessons: ILesson[] = [
        {
            title: 'Introduction to Docker',
            description: 'Installing docker to linux server and seting up configuratiosn',
            subjectId: '656833b5d5c68a68e19870a3',
            durationTime: {
                beginning: new Date(2023, 2, 9, 12, 30),
                ending: new Date(2023, 2, 9, 14, 0)
            }
        },
        {
            title: 'Containers',
            description: 'Creating Container and running on server',
            subjectId: '656833b5d5c68a68e19870a3',
            durationTime: {
                beginning: new Date(2023, 2, 11, 12, 30),
                ending: new Date(2023, 2, 9, 11, 0)
            }
        },
        {
            title: 'Container images',
            description: 'Recreating containers with predefined images',
            subjectId: '656833b5d5c68a68e19870a3',
            durationTime: {
                beginning: new Date(2023, 2, 13, 12, 30),
                ending: new Date(2023, 2, 13, 14, 0)
            }
        }
    ]

    
    try {

        //const subject = await SubjectModel.findOne({_id: '6564689f8d83a481cab0134d'});
//
        //if(subject) {
        //    const students = await StudentModel.find({groupId: subject.groupId});
        //    const teacher = await TeacherModel.findOne({_id: subject.teacherId})
        //
        //    students.map(eachStudent => eachStudent.fullName).forEach(
        //        eachStudent => {
        //           console.log(eachStudent + " is enrolled to subject " + subject.title + " by teacher " + teacher?.fullName)
        //        }
        //    )
        //}

        //const teacher = await TeacherModel.findOne({email: 'antonKonovalod@gmail.com'});
        //if (teacher) {
        //    const subjects = await SubjectModel.find({teacherId: teacher._id});
        //    if (subjects && Array.isArray(subjects)) {
        //        const students = subjects.map(async eachSubject => await StudentModel.find({groupId: eachSubject.groupId}));
        //        const result = await Promise.race([req_1(), req_2(), req_3()])
        //        console.log(result);
        //    }
        //}

        const subject = await SubjectModel.findOne({_id: '6564689f8d83a481cab0134d'});
        if (subject) {
            const lessons = await LessonModel.find({subjectId: subject._id});
            
            const lesson_titles = lessons.map(eachLesson => eachLesson.title);

            console.log(`subject ${colors.cyan(subject.title).italic} has following lessons: `);
            lesson_titles.forEach(eachLesson => console.log(' —' + colors.green(eachLesson)))
        }

        



    } catch(error) {
        if (error) {
            console.log((error as any).reason);
        } 
    }

    return connection;
}

run().then(
    async connection => {
        await connection.disconnect();
        console.log('shuting down gracefully!')
    }
)