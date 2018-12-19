import User from '../models/User';
import { BaseSchema } from './BaseSchema';

export const UserScheme = new BaseSchema<User>({
    target: User,
    name: 'User',
    relations: {
        Score: {
            target: "Score",
            type: "many-to-one",
            joinTable: true
        },
        Wallet: {
            target: "Wallet",
            type: "many-to-one",
            joinTable: true
        }
    },
    columns: {
        Username: {
            type: "varchar"
        },
        Password: {
            type: "varchar"
        },
        Email: {
            type: "varchar"
        },
        Country: {
            type: "varchar"
        },
        EthNetwork: {
            type: "varchar"
        },
        Phone: {
            type: "varchar"
        },
        Name: {
            type: "varchar"
        },
        PublicKey: {
            type: "varchar"
        },
        StorageId: {
            type: "varchar"
        },
        Surname: {
            type: "varchar"
        },
        WalletAddress: {
            type: "varchar"
        },
        Image: {
            type: "varchar"
        }
    }
});