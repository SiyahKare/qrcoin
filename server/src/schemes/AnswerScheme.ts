import Answer from '../models/Answer';
import { BaseSchema } from './BaseSchema';

export const AnswerScheme = new BaseSchema<Answer>({
    target: Answer,
    name: 'Answer',
    relations: {
        User: {
            target: "User",
            type: "many-to-one",
            joinTable: true
        },
        Option: {
            target: "User",
            type: "many-to-one",
            joinTable: true
        },
        Assessment: {
            target: "Assessment",
            type: "many-to-one",
            joinTable: true
        }
    },
    columns: {}
});