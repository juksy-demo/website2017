import { Router } from 'director/build/director.js';
import DFP from './common/googledfp.js';
// 'npm run dev': DEV_MODE = true
// 'npm run prod': DEV_MODE = false
let DEV_MODE = true; 
let routes;

if (DEV_MODE === true) {
  // npm run dev use: /
  routes = {
    // 首頁
    '/': [
      require('./pages/index')['default'],
      () => {
        DFP.run();
      }
    ],
    '/index.html': [
      require('./pages/index')['default'],
      () => {
        DFP.run();
      }
    ],
    // 文章內容頁
    '/article_:type.html': [
      require('./pages/article')['default'],
      () => {
        DFP.run();
      }
    ],
    // 蓋台廣告
    '/takeover_:type.html': [
      () => {
        DFP.run();
      }
    ],
    // 分類頁
    '/channel.html': [
      require('./pages/channel')['default'],
      () => {
        DFP.run();
      }
    ],
    // 熱門議題
    '/issue.html': [
      require('./pages/issue')['default'],
      () => {
        DFP.run();
      }
    ],
    // 主題特企
    '/events.html': [
      require('./pages/events')['default']
    ],
    // 獨家企劃
    '/exclusive.html': [
      require('./pages/exclusive')['default']
    ],
    // 品牌館
    '/brand.html': [
      require('./pages/brand')['default'],
      () => {
        DFP.run();
      }
    ],
    // 駐站達人
    '/editors.html': [
      require('./pages/editors')['default']
    ],
    // 達人文章
    '/editor.html': [
      require('./pages/editor')['default']
    ],
    // 搜尋結果
    '/search.html': [
      require('./pages/search')['default']
    ],
    // 搜尋結果找不到
    '/search_notfound.html': [
      require('./pages/search')['default']
    ],
    // 閒置頁
    '/idle.html': [
      require('./pages/idle')['default'],
      () => {
        DFP.run();
      }
    ],
    // 關於我們
    '/about.html': [
      require('./pages/about')['default']
    ],
    // 聯絡我們
    '/contact.html': [
      require('./pages/contact')['default']
    ],
    // 廣告刊登
    '/adguide.html': [
      require('./pages/adguide')['default']
    ],
    // 隱私權
    '/privacy.html': [
      require('./pages/privacy')['default']
    ]
  };
}
else {
  // npm run prod use: /website2017/dist
  routes = {
    // 首頁
    '/website2017/dist/': [
      require('./pages/index')['default'],
      () => {
        DFP.run();
      }
    ],
    '/website2017/dist/index.html': [
      require('./pages/index')['default'],
      () => {
        DFP.run();
      }
    ],
    // 文章內容頁
    '/website2017/dist/article_:type.html': [
      require('./pages/article')['default'],
      () => {
        DFP.run();
      }
    ],
    // 蓋台廣告
    '/website2017/dist/takeover_:type.html': [
      () => {
        DFP.run();
      }
    ],
    // 分類頁
    '/website2017/dist/channel.html': [
      require('./pages/channel')['default'],
      () => {
        DFP.run();
      }
    ],
    // 熱門議題
    '/website2017/dist/issue.html': [
      require('./pages/issue')['default'],
      () => {
        DFP.run();
      }
    ],
    // 主題特企
    '/website2017/dist/events.html': [
      require('./pages/events')['default']
    ],
    // 獨家企劃
    '/website2017/dist/exclusive.html': [
      require('./pages/exclusive')['default']
    ],
    // 品牌館
    '/website2017/dist/brand.html': [
      require('./pages/brand')['default'],
      () => {
        DFP.run();
      }
    ],
    // 駐站達人
    '/website2017/dist/editors.html': [
      require('./pages/editors')['default']
    ],
    // 達人文章
    '/website2017/dist/editor.html': [
      require('./pages/editor')['default']
    ],
    // 搜尋結果
    '/website2017/dist/search.html': [
      require('./pages/search')['default']
    ],
    // 搜尋結果找不到
    '/website2017/dist/search_notfound.html': [
      require('./pages/search')['default']
    ],
    // 閒置頁
    '/website2017/dist/idle.html': [
      require('./pages/idle')['default'],
      () => {
        DFP.run();
      }
    ],
    // 關於我們
    '/website2017/dist/about.html': [
      require('./pages/about')['default']
    ],
    // 聯絡我們
    '/website2017/dist/contact.html': [
      require('./pages/contact')['default']
    ],
    // 廣告刊登
    '/website2017/dist/adguide.html': [
      require('./pages/adguide')['default']
    ],
    // 隱私權
    '/website2017/dist/privacy.html': [
      require('./pages/privacy')['default']
    ]
  };
}

export default new Router(routes);