import BaseEntity from './Base'
import QuestionOption from './QuestionOption'
import Assessment from './Assessment'
import User from './User'
class Answer extends BaseEntity {
    Option?: QuestionOption;
    Assessment?: Assessment;
    User?: User;
}

export default Answer;