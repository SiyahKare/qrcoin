import BaseEntity from './Base'
import User from './User'
class Wallet extends BaseEntity {
    Deposit: number;
    User: User;
}

export default Wallet;