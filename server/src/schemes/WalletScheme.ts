import Wallet from '../models/Wallet';
import Assessment from '../models/Assessment';
import { BaseSchema } from './BaseSchema';

export const WalletScheme = new BaseSchema<Wallet>({
    target: Wallet,
    name: 'Wallet',
    relations: {
        User: {
            target: "User",
            type: "many-to-one",
            joinTable: true
        }
    },
    columns: {
        Deposit: {
            type: "float"
        }
    }
});