import Question from '../models/Question';
import Assessment from '../models/Assessment';
import { BaseSchema } from './BaseSchema';

export const QuestionScheme = new BaseSchema<Question>({
    target: Question,
    name: 'Question',
    relations: {
        Assessment: {
            target: "Assessment",
            type: "many-to-one",
            joinTable: true
        },
        Options: {
            target: "QuestionOption",
            type: "one-to-many",
            nullable: true,
            inverseSide: "Question",
            cascade: true,
            onDelete: 'CASCADE'
        }
    },
    columns: {
        Question:{
            type: "varchar",
        }
    }
});