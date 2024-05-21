import { Model } from 'pinia-orm';
import { Attr, Num, Str } from 'pinia-orm/dist/decorators';

export type TPlayerPosition =
  | 'blitzer'
  | 'thrower'
  | 'catcher'
  | 'lineman'
  | 'monstrosity';

export default class FootballPlayer extends Model {
  static entity = 'football-player';

  @Num(null) declare id: number;
  @Attr(null) declare coordinates: [number, number];
  @Str(null) declare team: 'home' | 'away';
  @Str(null) declare type: TPlayerPosition;
}
