/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1980/01/01/Markdown-HTML-Test/index.html","960896a4083e63cb7ae3e7668097b0ae"],["/2024/12/01/月野的魔法幻想之旅-制作人员名单/index.html","0def8cbd301af995d2f19a7f125f180d"],["/2024/12/01/月野的魔法幻想之旅-设定集/index.html","ecdf1e2e49abe6070190ecb8cda14281"],["/2024/12/24/第一章-长川谷那个老妖婆/index.html","0d0f160e0156ca1dcd4b168eb5a7d506"],["/2024/12/28/第一章-追不上的前尘往事-后藤大崎的追击攻略/index.html","ac517507a0eeb534966dafb8265751e9"],["/2025/01/11/第二章-学院里的夜猫子们/index.html","13fb2c1fedf0ebf2bd3535da2cf44169"],["/2025/01/23/第二章-吃货是概念神-后藤大崎的追击攻略/index.html","6c56b9e50222673fc7796cddb8296976"],["/2025/01/28/第三章-可爱女同学神秘失踪/index.html","292c01508c53192c5f8060fe9e1d0001"],["/404.html","056d6c1c1f415456ab6481bfa184bf54"],["/about/index.html","6c106dbb3f328c36ba9cbbaacc83e049"],["/archives/1980/01/index.html","b109d7430b6775652efcf30116db734a"],["/archives/1980/index.html","03e2d73571cf8074d4223fb7d1fb7a29"],["/archives/2024/12/index.html","6bf541f0ad5ccd5e87ca3b61e867bed5"],["/archives/2024/index.html","dfbe6c1208c7f730dfd8e0b9ba98604e"],["/archives/2025/01/index.html","4691c8242ed67937a41678dacc975bbe"],["/archives/2025/index.html","3013374c5b207cebcaec81bb97e28f00"],["/archives/index.html","bbae2bb9363e3eecbfbe5b0c304ffff7"],["/categories/Test-Web/index.html","fe5e9f4f9ddcb5871967a01c7893667a"],["/categories/index.html","db109c7617e67702ad4925f5691259a5"],["/categories/主线-月野的魔法幻想之旅/index.html","4babe6f823df8fda9d13bac0871642ed"],["/categories/支线-后藤大崎的追击攻略/index.html","c587528c00ba88ef4f49963b2d572808"],["/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["/css/imgloaded.css","75b0dc844bb23ad7bff0ecf6e25eae6b"],["/css/index.css","0bdad0940a66019f27d2d446eef6f07d"],["/css/style.css","ea77c4e001d16aa49848be83d9bb23ea"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fancybox/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/fancybox/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/font/JotunheimVersion3.ttf","c1098459530099bd84bd11742676119f"],["/font/JotunheimVersion3.woff","cee048d91023f690e67089bcec511af5"],["/font/JotunheimVersion3.woff2","ed3f4524e76115e9de589f888e7efe17"],["/go.html","e73a0df995076d0295ba3f19b35727c0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/background-2-PE.jpg","dd868a2587ee2a6c2e0c604925c472b3"],["/img/background-2.jpg","1421a5ed790e70e9ededdbde47a6c0fd"],["/img/background-PE.jpg","b15a604454c5f25f01e3a1fc0a57fb5b"],["/img/background.jpg","7f6d0ae973a5780cd8ea57964166b442"],["/img/butterfly-icon.png","d5c8ca32f3fa54a8ead0c671f77241db"],["/img/error-page-last.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/error-page.png","870c98226558e58137022c01210adfbe"],["/img/favicon.png","2a02213eecd7767ba58b2ce8bdce2f1b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/logo.png","2a02213eecd7767ba58b2ce8bdce2f1b"],["/index.html","1dc9f56964d34986b17719f95d7b8513"],["/js/imgloaded.js","d2a5302126f466949730985a51bafe41"],["/js/jquery-3.6.4.min.js","641dd14370106e992d352166f5a07e99"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/script.js","0efb10f342ee4cb49558c3bfd0994652"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/js/welcome.js","6c3868321472642047f02081ed1ac23c"],["/link/index.html","a77b4a3cc20de35c77f81d2c87ba9bde"],["/sw-register.js","f89a5f20337ecd5045c6c76878db9dea"],["/tags/Test-Tag/index.html","413735efca2c9448f30e0ef0c526e820"],["/tags/index.html","d3d36149e02170215b7c27eec215dd4b"],["/tags/后藤大崎的追击攻略/index.html","1dcfa50c38bc76f3f4bee17f8143678a"],["/tags/月野的魔法幻想之旅/index.html","b0a50282297e448d0b18b9f3c29f46be"],["/worldview/index.html","dea7964e9f4cc21c38671e793c2e22bf"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
