import Transfer from '../models/Transfer';
import { BaseSchema } from './BaseSchema';

export const TransferScheme = new BaseSchema<Transfer>({
    target: Transfer,
    name: 'Transfer',
    relations: {
        User: {
            target: "User",
            type: "many-to-one",
            joinTable: true
        }
    },
    columns: {
        Amount: {
            type: "float"
        },
        Status: {
            type: "varchar"
        },
        To: {
            type: "varchar"
        },
        Type: {
            type: "varchar"
        }
    }
});