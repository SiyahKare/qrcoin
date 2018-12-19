import { ConnectionOptions } from "typeorm";
import { UserScheme } from '../schemes/UserScheme';
import { AnswerScheme } from '../schemes/AnswerScheme';
import { AssessmentScheme } from '../schemes/AssessmentScheme';
import { QuestionOptionScheme } from '../schemes/QuestionOptionScheme';
import { QuestionScheme } from '../schemes/QuestionScheme';
import { ScoreScheme } from '../schemes/ScoreScheme';
import { TransferScheme } from '../schemes/TransferScheme';
import { WalletScheme } from '../schemes/WalletScheme';

const options: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123",
    database: "qrcoin",
    synchronize: true,
    logging: false,
    entities: [
        UserScheme, AnswerScheme, AssessmentScheme,
        QuestionOptionScheme, QuestionScheme, ScoreScheme,
        TransferScheme, WalletScheme
    ]
};

export const Config = {
    db: options,
    mail: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: '',
            pass: ''
        }
    },
    mailSender: "",
    keys: ["123456"],
    key: "p36nSHjMKdqrgAZeF5sHgCjbV5vMXMt8"
} 
