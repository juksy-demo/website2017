import { social } from './social.js';
import { articleYT } from './articleYT.js';
import { articleFont } from './articleFont.js';
import { recommend } from './recommend.js';
import { popular } from './popular.js';

(function() {
  // Facebook Share
  social();
  // 設定文章內的 youtube 寬高
  articleYT();
  // 文章內文字放大縮小功能
  articleFont();
  // 專屬推薦
  recommend();
  // 熱門文章
  popular();
})();