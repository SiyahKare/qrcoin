import Question from '../models/Question';
import QuestionOption from '../models/QuestionOption';
import { BaseSchema } from './BaseSchema';

export const QuestionOptionScheme = new BaseSchema<QuestionOption>({
    target: QuestionOption,
    name: 'QuestionOption',
    relations: {
        Question: {
            target: "Question",
            type: "one-to-many",
            nullable: true,
            inverseSide: "QuestionOption"
        }
    },
    columns: {
        Option: {
            type: "varchar",
        },
        Score: {
            type: "float",
        }
    }
});