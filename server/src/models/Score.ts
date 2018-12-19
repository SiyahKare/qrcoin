import BaseEntity from './Base'
import User from './User'
import Assessment from './Assessment'
class Score extends BaseEntity {
    Score: number;
    GoogleConnected: boolean;
    FacebookConnected: boolean;
    LinkinConnected: boolean;
    Assessment?: Assessment;
    User?: User;
}

export default Score;