// import 文を使ってcommon.scssファイルを読み込む。
import '../scss/common.scss';

import { setRoulette } from './module/setRoulette';
import { moveRoulette } from './module/moveRoulette.js';
import { setTalkList } from './module/setTalkList.js';
import { rollDice } from './module/rollDice.js';

setRoulette();
moveRoulette();
setTalkList();
rollDice();
