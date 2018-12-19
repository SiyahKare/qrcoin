import Assessment from '../models/Assessment';
import { BaseSchema } from './BaseSchema';

export const AssessmentScheme = new BaseSchema<Assessment>({
    target: Assessment,
    name: 'Assessment',
    relations: {
        Questions: {
            target: "Question",
            type: "one-to-many",
            nullable: true,
            inverseSide: "Assessment",
            cascade: true,
            onDelete: 'CASCADE'
        },
        Scores: {
            target: "Score",
            type: "one-to-many",
            nullable: true,
            inverseSide: "Assessment",
            cascade: true,
            onDelete: 'CASCADE'
        }
    },
    columns: {
        Header: {
            type: "varchar"
        }
    }
});