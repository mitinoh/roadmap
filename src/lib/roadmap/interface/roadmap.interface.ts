import { IKey, Key } from './key.interface';
import { Localize } from './localize.interface';

export interface IRoadMap {
  title?: string;
  desc?: string;
  color?: string;
  localize?: Localize;
  downvote?: boolean;
  keys?: Key[];
  url?: string
}

export class RoadMap implements IRoadMap {

  title: string;
  desc: string;
  color: string;
  localize: Localize;
  downvote: boolean;
  keys: Key[];
  url: string

  constructor(source: IRoadMap, url: string) {
    this.title = source.title ?? "TITLE"
    this.desc = source.desc ?? "DESCRIPTION"
    this.color = source.color ?? '#007eff'
    this.localize = source.localize ?? Localize.def()
    this.downvote = source.downvote ?? false
    this.keys = this.initKeys(source.keys ?? [])
    this.url = url
  }

  initKeys(keys: IKey[]): Key[] {
    return keys.map(key => new Key(key))
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
