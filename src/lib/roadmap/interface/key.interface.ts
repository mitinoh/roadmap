import { Localize } from './localize.interface';
import { Vote } from './vote.interface';

export interface IKey {
  title?: string;
  desc?: string;
  localize?: Localize;
  up?: Vote;
  down?: Vote;
}

export class Key implements IKey {
  title: string;
  desc: string;
  localize: Localize;
  up: Vote;
  down: Vote;

  constructor(source: IKey) {
    this.title = source.title ?? 'KEY TITLE'
    this.desc = source.desc ?? 'KEY DESCRIPTION'
    this.localize = source.localize ?? Localize.def()
    this.up = new Vote(source.up)
    this.down = new Vote(source.down)
  }

  value(down: boolean): number {
    return down ? this.down.value : this.up.value
  }

  upVote() {
    if (this.up.voted) {
      this.up.value -= 1
      this.up.voted = false
    } else {
      this.up.value += 1
      this.up.voted = true
      if (this.down.voted) { this.down.value -= 1; this.down.voted = false }
    }
  }

  downVote() {
    if (this.down.voted) {
      this.down.value -= 1
      this.down.voted = false
    } else {
      this.down.value += 1
      this.down.voted = true
      if (this.up.voted) { this.up.value -= 1; this.up.voted = false }
    }
  }

  get getTitle(): string {
    if (this.localize?.TITLE?.hasOwnProperty(navigator.language)) return this.localize.TITLE[navigator.language]
    return this.title
  }
  get getDesc(): string {
    if (this.localize?.DESC?.hasOwnProperty(navigator.language)) return this.localize.DESC[navigator.language]
    return this.desc
  }
}


