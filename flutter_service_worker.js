'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "63c5033beb73d88e9dea4d97157ac414",
".git/config": "e119a14071c13f96a6d9c34e9c29c58c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9bedad56506de2c514acceeac8e4dc36",
".git/HEAD": "36d2e6bfefea098ed28d3260f6fd2002",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "027dc840c3037241f844bc1fe1be8d88",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81cfbf58ac0c186d693efa4e6d71585f",
".git/logs/refs/heads/deploy": "9f9d431425e2d7e740d45cc7865e9315",
".git/logs/refs/remotes/origin/deploy": "c364edbe2e1b96449c7352df387de871",
".git/logs/refs/remotes/origin/master": "fb8d7a38e56c72c35cd3cda19cd4877c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/a15262e001ca10416dcdd4cc80128f1669ca90": "a16e218129a09d8408cec33f9ecbca0e",
".git/objects/0a/cdc0c23cbc7c85a4c41d559b3d9fa7d3ee7843": "3e1e59e4b4e9ee5eb215bd0be8df0050",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1e/598b243a18efe430b13537d6986cf2d3d33b13": "cec4524917092a5e0861f7ef1d034ce5",
".git/objects/32/390a9deb935ddc967ec492c054e1b1bd10dc5d": "c6023ca4c573fad668bd87476c3457df",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/35ccfd54276afc741a531a95181198b9d2eb46": "e88c3f410718ad79ec8e1fdc451044cd",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/b1073310e4906fe13e8ac25912a581eabd2ea5": "f906eaa9f95a51c8810b054c5e74e57a",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/6d96d99b9dc545418dcb47047139f970e1eb58": "b4ea8ea5d81162ad749b8d7447e5a529",
".git/objects/52/812b3733102064b88c4e8ef451bfcf93e185c7": "4963e23c44225548761ab834203e5a38",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/62/aeb203449d8f6465a1fd458353c95522106349": "53778e325f756331b2fbc23791a9fab8",
".git/objects/63/bc6516c321b0424e5d3426804fc41a61f87c15": "378efaef518e3e995729b388a7c7204a",
".git/objects/66/21df32815c62ab96ca0b96931fc2202c2e6912": "e5167549c7c2b09ea066e88176f11b30",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/ba05a09de357278f259bead8f332f8f0577a0c": "6d34290ea9a3b78fed5513774bfe95d4",
".git/objects/6f/f2e185b566893e38a48c8ecae0e3de2643c8af": "913da07c911f419bb95c1629bb82f8ef",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/b56308dd96592c67b04282ece5619bf4325840": "aec992cb74950ad71ba5d7bfae8b77dd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/6aceab9c9059c40c8e60e3f5ccf9b443e30ee4": "c837e2bb563553d93ca03758e6b27048",
".git/objects/86/3caf716c2c5e323c19d7a0be08486d6fb21c31": "b177272f8e87ebd7bff1d77fe0041bcd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/98a393862893d6f71a5a48cde7e59d3dc3ad02": "846f9ce27ebda55d08ca73aa02830b1b",
".git/objects/92/879001250669614df651ff738a823eb3200169": "1789c825d98c0db2c7d1a0d678f52b38",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/551fea2ea1858ec7d4dd4a9da17622f4929edd": "553a2d4ed9eba5a7b35fc0868d407b60",
".git/objects/aa/85eae86a3bca5a9857a4e9a08ca3549701f199": "38609370fd95c10903b0744898d55d1b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/a1c3215b5e8f43944acd9e633c3ef6cc31fa16": "423fcc02ab2ba04ed259afa1aa665388",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/87abeb008bb7fe620b1db8509c27996c823096": "22320e937e9769e0c7d203c28e88e7e0",
".git/objects/c2/3963f204af6013742071e97dbd79296769760a": "b22c9176434fe339cc1eeb44c44c327e",
".git/objects/ca/3ae5cbb76b25784d80b4abc2c52707d6055a36": "95bab5728d7e39d5460b2f359ae3e976",
".git/objects/cc/69fe83aec7223328c6878df00b603b56974ca4": "7a169f050e9a35f8d6a22fdd8112f902",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/61e9b9e49b388a8dd142f095f78309be4fc1c9": "e492cc134e02dd4fb897791b4b06c45c",
".git/objects/dc/67709065c0668331f132425c089de86155c042": "618ea7e765aef2356bfe1ce64519b207",
".git/objects/e1/0c2746c69f14d1cd42f42fda156df8260e6ef8": "f8ad788d87116fa280d288be75aea149",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/c0396c2a7165e8351ca031f3573ca40be9719e": "1763a58c4df7e7a496fe16ca7e2d26e2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/58ff22a7d02d5639d2bec06638ea0a5cae2c41": "78184a906948da8b3a654fabcc8b3ece",
".git/objects/f3/222e6b3ceecf5cdaa8031675393bd7c82c81f0": "d519983c689833abc5145883ccb8b194",
".git/objects/f4/ab3da4bab1279ee98e0c40eb2037384db78221": "7bbd83058abdfee7e88dd9c2776eb568",
".git/objects/f6/00965486221a2f93ee035a722c1407c2fe68e4": "40851fe31554500d675b954ce22d644d",
".git/objects/f6/dcbda5a7141e63e95909f3d15bad3e4c3fa8dd": "7c243092354ac8be9c038489bb8644a0",
".git/objects/pack/pack-98ad63e00e14960ef303775884261cda64fd372e.idx": "7819f462cd4e8f0bc5fb1ccba74b4cd2",
".git/objects/pack/pack-98ad63e00e14960ef303775884261cda64fd372e.pack": "6e8c66ca6fd1cbabfef5883a1f975a4d",
".git/ORIG_HEAD": "8c7ae97e7991487e4968114632db5a67",
".git/refs/heads/deploy": "d2faa6d09cd97cab98c3099b8557a8bd",
".git/refs/remotes/origin/deploy": "d2faa6d09cd97cab98c3099b8557a8bd",
".git/refs/remotes/origin/master": "77da83c0fbbb83c9f04da90addfee331",
"assets/AssetManifest.json": "43340095d88934f4f89d8649cf225367",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/asset/Medlar.png": "24bbd628fc3cf2d7a6f4ce940dfadc8b",
"assets/NOTICES": "e94288fbcc4884d1f061a135436b7a74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "54ff5eb9b713dfc4e2a2967d8dc6460e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "10792425cfb665f8ec9631779014377c",
"/": "10792425cfb665f8ec9631779014377c",
"main.dart.js": "adf61b86e4e65813c8fba8916cdbc101",
"manifest.json": "b8b1ddae5bc0693c5bbcd0bc231d37cd",
"version.json": "5ec41d345ea3bddb71e5aac986dc25f6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
