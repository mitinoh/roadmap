export interface IVote {
  value?: number
  voted?: boolean
}

export class Vote implements IVote {
  value: number;
  voted: boolean;

  constructor(source?: IVote) {
    this.value = source?.value ?? 0
    this.voted = false
  }
}
