import BaseEntity from './Base'
import QuestionOption from './QuestionOption'
import Assessment from './Assessment'
class Question extends BaseEntity {
    Question: string;
    Options?: QuestionOption[];
    Assessment: Assessment;
}

export default Question;