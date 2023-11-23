import {connect} from 'mongoose';
import {StudentModel} from './models/student/Student'

const run = async () => {
    const connection = await connect(`mongodb+srv://azamrasulhujaev:LjxfjFRHNw560xel@cluster0.dktqc8r.mongodb.net/simplify`);
    //await connect(`mongodb://localhost:27017/simplify`)
    const response = await StudentModel.create({
        fullName: 'Said Azam',
        email: 'saidAzam@gmail.com',
        groupId: null
    });

    console.log(response);


}

run();

