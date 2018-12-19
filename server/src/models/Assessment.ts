import BaseEntity from './Base'
import Question from './Question'
import Score from './Score'
class Assessment extends BaseEntity {
    Header: string;
    Questions?: Question[];
    Scores?: Score[];
}

export default Assessment;