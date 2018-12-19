import Score from '../models/Score';
import Assessment from '../models/Assessment';
import { BaseSchema } from './BaseSchema';

export const ScoreScheme = new BaseSchema<Score>({
    target: Score,
    name: 'Score',
    relations: {
        Assessment: {
            target: "Assessment",
            type: "many-to-one",
            joinTable: true
        },
        User: {
            target: "User",
            type: "many-to-one",
            joinTable: true
        }
    },
    columns: {
        Score: {
            type: "float"
        },
        GoogleConnected: {
            type: "tinyint"
        },
        FacebookConnected: {
            type: "tinyint"
        },
        LinkinConnected: {
            type: "tinyint"
        }
    }
});