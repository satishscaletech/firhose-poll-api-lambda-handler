/* import { Vote } from './models'

interface IPayload {
  questionId: string,
  optionId: string,
}

class Voting {
  public async storeVote(payload: IPayload): Promise<any> {
    const newVote = new Vote();
    newVote.questionId = payload.questionId;
    newVote.optionId = payload.optionId;

    await newVote.save();
  }
}

const vote = new Voting()

export default vote; */