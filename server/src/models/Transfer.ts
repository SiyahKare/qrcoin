import BaseEntity from './Base'
import User from './User'
class Transfer extends BaseEntity {
    Amount?: number;
    Type?: string;
    Status?: string;
    To?: string;
    User: User;
}

export default Transfer;