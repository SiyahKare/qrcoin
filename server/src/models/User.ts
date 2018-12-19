import BaseEntity from './Base'
import Score from './Score'
import Wallet from './Wallet'
class User extends BaseEntity {
    Username: string;
    Password: string;
    Email: string;
    Name: string;
    Surname: string;
    Phone: string;
    Country: string;
    WalletAddress: string;
    StorageId: string;
    PublicKey: string;
    EthNetwork: string;
    Image: string;
    Score: Score;
    Wallet: Wallet;
}

export default User;