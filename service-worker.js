/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "efbd4c2cbce13261ad70cca2a1ca1499"
  },
  {
    "url": "assets/css/0.styles.8a8b2bef.css",
    "revision": "0ba4f4c43ca47f239d2a96027d0ba089"
  },
  {
    "url": "assets/js/1.1b909c2f.js",
    "revision": "c032de003214f301d04762696c9e79a9"
  },
  {
    "url": "assets/js/3.33a51c2b.js",
    "revision": "1564fae90d3a520caca3b75b40b9f376"
  },
  {
    "url": "assets/js/4.eba30cdb.js",
    "revision": "28ed0c3add07cc730483ab8742fa83fb"
  },
  {
    "url": "assets/js/5.60bf3841.js",
    "revision": "0a39cff30ec8246c5a60bcd0a13e9845"
  },
  {
    "url": "assets/js/6.2a9f499f.js",
    "revision": "4a4a80deb1bbf75af6ecf5435b67cf6a"
  },
  {
    "url": "assets/js/7.95ef1665.js",
    "revision": "4c752cf88fc6e301140eadf7a4add2e5"
  },
  {
    "url": "assets/js/8.b9fd434d.js",
    "revision": "c24d4b7540b84fb7ce1aab05ab9de203"
  },
  {
    "url": "assets/js/app.534fb8a4.js",
    "revision": "2f35feae59f5c9383659947fdb7bff8a"
  },
  {
    "url": "index.html",
    "revision": "8d1e7f90343b7f65dee95ecc2da4f5e7"
  },
  {
    "url": "posts/2019/01/21/test.html",
    "revision": "1110c0d277ba52960e73e82f9318b390"
  },
  {
    "url": "posts/2019/01/22/another-test.html",
    "revision": "95026216c17bd6c155bc71f592e38c72"
  },
  {
    "url": "posts/categories/catA.html",
    "revision": "549eca9468d37e4479ace0041e1e9d2a"
  },
  {
    "url": "posts/categories/catB.html",
    "revision": "089edf6d19ce68f1daae43f9fb0bb4b4"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "f04bf3d579304cf35f939877ba0ad3c7"
  },
  {
    "url": "posts/index.html",
    "revision": "12dd6dc3df350eb870e39254b50b0910"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "f122bc770b59f4dd869df1121487861f"
  },
  {
    "url": "posts/tags/js.html",
    "revision": "8bb6a828c6e38f0d2c66f3a352ebf8b2"
  },
  {
    "url": "posts/tags/tagA.html",
    "revision": "02be36dc233ab9eb68d3cd072269540b"
  },
  {
    "url": "posts/tags/tagB.html",
    "revision": "4146b8a37cabc1fcb3afe529b474473b"
  },
  {
    "url": "posts/tags/vue.html",
    "revision": "cb4e1c9824ccadf8bcd3809b1c0ea9d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
