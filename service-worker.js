"use strict";var precacheConfig=[["/starter-landing-page/index.html","b5dda308d27c04bfd4ade9d70c6daf29"],["/starter-landing-page/static/css/main.007447cf.css","ac28b9317a797e009e3c3c9f591bd93f"],["/starter-landing-page/static/js/main.12c90d19.js","2ebac034482c67ef4e46c57c052c8bcc"],["/starter-landing-page/static/media/Simple-Line-Icons.0cb0b9c5.woff2","0cb0b9c589c0624c9c78dd3d83e946f6"],["/starter-landing-page/static/media/Simple-Line-Icons.2fe2efe6.svg","2fe2efe63441d830b1acd106c1fe8734"],["/starter-landing-page/static/media/Simple-Line-Icons.78f07e2c.woff","78f07e2c2a535c26ef21d95e41bd7175"],["/starter-landing-page/static/media/Simple-Line-Icons.d2285965.ttf","d2285965fe34b05465047401b8595dd0"],["/starter-landing-page/static/media/Simple-Line-Icons.f33df365.eot","f33df365d6d0255b586f2920355e94d7"],["/starter-landing-page/static/media/bg-masthead.20cbd480.jpg","20cbd480edd75dd476f3d16c6a763f28"],["/starter-landing-page/static/media/bg-showcase-1.dbfff7f3.jpg","dbfff7f304afb1dc5bbd81a3ddba1cb0"],["/starter-landing-page/static/media/bg-showcase-2.37b5a1e7.jpg","37b5a1e70d28e0251d4dbe331de3db29"],["/starter-landing-page/static/media/bg-showcase-3.91db0751.jpg","91db0751f17876aac87e28a2033e3e76"],["/starter-landing-page/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/starter-landing-page/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/starter-landing-page/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/starter-landing-page/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/starter-landing-page/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/starter-landing-page/static/media/testimonials-1.828e0935.jpg","828e0935e45611b23593d139bd1984f1"],["/starter-landing-page/static/media/testimonials-2.f3c0271e.jpg","f3c0271e2279f2bdeea02ddc3aa03dc5"],["/starter-landing-page/static/media/testimonials-3.15393c5a.jpg","15393c5a215a67b0f4bbc4d4ed55f12c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/starter-landing-page/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});