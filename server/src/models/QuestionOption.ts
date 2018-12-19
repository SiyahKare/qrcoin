import BaseEntity from './Base'
import Question from './Question'
import Answer from './Answer'
class QuestionOption extends BaseEntity {
    Option: string;
    Question?: Question;
    Score: number;
}

export default QuestionOption;