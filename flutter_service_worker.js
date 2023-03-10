'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e0176625280b3b64f83a4be2af6f2a89",
".git/config": "e119a14071c13f96a6d9c34e9c29c58c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "51c1072701e302cf012b9388ee10e275",
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
".git/index": "39ff0042c11939e38d302c600c066737",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bbdb86b19aebac12fcdeafee2a1e29a8",
".git/logs/refs/heads/deploy": "54082a83af813aebc7abadc47be7d570",
".git/logs/refs/remotes/origin/deploy": "4ff503b202cfbeb5dd47da97db505acc",
".git/logs/refs/remotes/origin/master": "e3b3baccc58ac23681835f8b4bd4f00d",
".git/objects/01/6f313a07d8c5422dd5698105cce1937f4ab33b": "edd6135cc46eca3d0d1eca144a005b2c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/3f70f502633f99dd6cbb9b8b21212b194f674b": "60fc2bcfaebdd6e4ec93e2d8455ca20c",
".git/objects/09/a15262e001ca10416dcdd4cc80128f1669ca90": "a16e218129a09d8408cec33f9ecbca0e",
".git/objects/0a/cdc0c23cbc7c85a4c41d559b3d9fa7d3ee7843": "3e1e59e4b4e9ee5eb215bd0be8df0050",
".git/objects/10/555f5d94a2cd390e877bbc88b7705f6827cada": "43b38d8450ec16e03510d72455f00600",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/e16d3114b49a334c83502ba7350c3c9c5ba84b": "47a3e26085819153a38685943f5afa9e",
".git/objects/19/50bd651e27d06b4ad8f38d1e929fcc4649e216": "930c22517718c34095c08bf151ee5f6a",
".git/objects/1e/598b243a18efe430b13537d6986cf2d3d33b13": "cec4524917092a5e0861f7ef1d034ce5",
".git/objects/28/bb5ebc979fbc858e763567eea83164844394fc": "c10ca50e30a2080bc242fb1be2a1b17e",
".git/objects/29/8f51d3316e22bd872df4f486ec62f18f4fdca6": "d6c123d997fc117286ffcb1b970872e2",
".git/objects/2b/c2d5bd7b756a2ccfdedb79929b252376ffc7f1": "5bd6f51f140b67327e33669d7feaac00",
".git/objects/2d/1bee0ac994b35891f64583657de5a464d006c5": "a93b0c2f38f7f86325877e1d8e926998",
".git/objects/30/f5a58c91922db931ccb9860c3cd23bec58444b": "74676d89c59a61dbf303a155c6eff0d9",
".git/objects/32/390a9deb935ddc967ec492c054e1b1bd10dc5d": "c6023ca4c573fad668bd87476c3457df",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/732ed2171955c942e25afcf6f9a30f7909789f": "5ff8e3bfccbc4fea24d22ac55d4a8fda",
".git/objects/38/c985355795b5c50bd31451e8c0d6d8095de5e6": "ce82675b0d816dd6a95753e29bb51d58",
".git/objects/3a/35ccfd54276afc741a531a95181198b9d2eb46": "e88c3f410718ad79ec8e1fdc451044cd",
".git/objects/3f/4018a1b1a9dca596ad14060f45e6feef80284b": "f83acef4ee72e54a26045f248154e37f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/33cbef40b1904885740900580905517e87abf3": "ea0f2dde1997dbd999f8d78b39eae187",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/b1073310e4906fe13e8ac25912a581eabd2ea5": "f906eaa9f95a51c8810b054c5e74e57a",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/6d96d99b9dc545418dcb47047139f970e1eb58": "b4ea8ea5d81162ad749b8d7447e5a529",
".git/objects/50/5d77c789daecdc960879e85fcbb65afc2d93a5": "14e901b37215a545c5b1ca43b0c095ad",
".git/objects/50/c9d6e6d0682aee706535ce60bd2ba45297f099": "4a599e9e626ca287cb8e1229458d6d95",
".git/objects/51/bd9dc1eb0e378f6358fdc288c516f63b91c836": "3a05ec5c3f92a387230c9f5e8ab70357",
".git/objects/52/812b3733102064b88c4e8ef451bfcf93e185c7": "4963e23c44225548761ab834203e5a38",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5e/d790c16c01cb4f7970079d2c01816d2979bbeb": "3e8e60dd5f64055d3df19a3c1086b881",
".git/objects/62/5dfa7b29eb26f5aad12d2ec7c4ee1cf7d6a414": "eb040b0c4becc1b9bff562b7bb67be70",
".git/objects/62/aeb203449d8f6465a1fd458353c95522106349": "53778e325f756331b2fbc23791a9fab8",
".git/objects/63/bc6516c321b0424e5d3426804fc41a61f87c15": "378efaef518e3e995729b388a7c7204a",
".git/objects/66/21df32815c62ab96ca0b96931fc2202c2e6912": "e5167549c7c2b09ea066e88176f11b30",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/6830489cad4cd000b3ad7ff0c6a25cbfbade25": "854e2a95ea034fdb5d5c88023bb2c3a4",
".git/objects/6f/ba05a09de357278f259bead8f332f8f0577a0c": "6d34290ea9a3b78fed5513774bfe95d4",
".git/objects/6f/f2e185b566893e38a48c8ecae0e3de2643c8af": "913da07c911f419bb95c1629bb82f8ef",
".git/objects/70/30df54a60e89e1383eee82fda37e8c48d32192": "90d3d997e236763bbedcbff7cae0c8a3",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/b56308dd96592c67b04282ece5619bf4325840": "aec992cb74950ad71ba5d7bfae8b77dd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/3e494b59396e8041982922569d4a6ecd780395": "c0fc8762b3642ef5eb6fcb874b063224",
".git/objects/82/6aceab9c9059c40c8e60e3f5ccf9b443e30ee4": "c837e2bb563553d93ca03758e6b27048",
".git/objects/86/3caf716c2c5e323c19d7a0be08486d6fb21c31": "b177272f8e87ebd7bff1d77fe0041bcd",
".git/objects/88/341ee912f8c34b1b407dd8ba8a0765d0bd9fcb": "5ae1f8c4abc2afccbb65b18bae047480",
".git/objects/88/662137099f714596ba29d623bd35e14c8a6dd7": "801648ffd4e118ae40c8c40574f84431",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/07eebae9f099077c99ec2eb3969a2a7667e8b5": "20291e9eb73c81ace9caca42718b8e49",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/98a393862893d6f71a5a48cde7e59d3dc3ad02": "846f9ce27ebda55d08ca73aa02830b1b",
".git/objects/92/879001250669614df651ff738a823eb3200169": "1789c825d98c0db2c7d1a0d678f52b38",
".git/objects/94/0d3c1ea1a7eb5a093bd4a615859c99d140de27": "4dbe1d3919c4addaf261811406fdc88d",
".git/objects/94/6e5a3b993b487c9fed179048dd1b80fd1e3575": "31f8b4247cc78e041a083ef16603db66",
".git/objects/9f/f94cc21e3241452e42d6f1d0417c4c03b82645": "8e571658acc025c18341ed5badc4e9af",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/551fea2ea1858ec7d4dd4a9da17622f4929edd": "553a2d4ed9eba5a7b35fc0868d407b60",
".git/objects/a3/6bbeeca159f1897261b7ff75db2a645074bd21": "3291a6a169fddfbd8df111fe5cb401bd",
".git/objects/a5/cc274ffc3e54f52b5facf0ff61eb5ea1877fe8": "8a982b3766fd18d63e08f1cb8f29d9a4",
".git/objects/aa/85eae86a3bca5a9857a4e9a08ca3549701f199": "38609370fd95c10903b0744898d55d1b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/26bedb05f193dd2ab5a1b4d6db35c24e23991b": "3197e5db0a4e277de39e490eada2136f",
".git/objects/b0/a1c3215b5e8f43944acd9e633c3ef6cc31fa16": "423fcc02ab2ba04ed259afa1aa665388",
".git/objects/b2/3d1931437138d4768b05b7edeccfcf05555bd2": "20b5b48b64496cfafe224cda8db3f7c3",
".git/objects/b3/b841e8b949d676e7aab951bcf67d455f8410a4": "38fec60bc9acc0fe9efe7e895ab8f4fe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/87abeb008bb7fe620b1db8509c27996c823096": "22320e937e9769e0c7d203c28e88e7e0",
".git/objects/bb/a7780d92bc178cd48829b6b539f10cb44b2baa": "12e15a6372b7ab6043157619beea0f19",
".git/objects/bb/bd013992447f0e5afb5c006dfdee50d8f3ec59": "af9c3647401ceb6c0c4c0e783704632f",
".git/objects/be/1ae0f576ee9b6e546111d3b51164553944b808": "a8518c66d8656c9a8a4c9156b5abc6bc",
".git/objects/be/77b3349f5dcbe507f81bf4f45b5de6f8cee7be": "3cb01db4095c567d20d6f08db491fbe3",
".git/objects/be/9b1eaffeed17af9fa414a9fdc020fa6be4a225": "ba86100fadcd7571902c8ad1361a0988",
".git/objects/c1/5a281ba87da5baed64a4b2477c914d4cdd14aa": "c1d530a3629c53ef5fb48f70c3ae3d9e",
".git/objects/c2/3963f204af6013742071e97dbd79296769760a": "b22c9176434fe339cc1eeb44c44c327e",
".git/objects/ca/3ae5cbb76b25784d80b4abc2c52707d6055a36": "95bab5728d7e39d5460b2f359ae3e976",
".git/objects/cc/69fe83aec7223328c6878df00b603b56974ca4": "7a169f050e9a35f8d6a22fdd8112f902",
".git/objects/d3/afb6ced83293bb28c1acf309d0cfdda0a1ed57": "f22617db576f25cededefeb745304e40",
".git/objects/d4/23f2b5e5a9c37d1d9e437f2b8fd2257ffb5b16": "5a1bc7b67fa41c7b10a9b391a1cf56ce",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/61e9b9e49b388a8dd142f095f78309be4fc1c9": "e492cc134e02dd4fb897791b4b06c45c",
".git/objects/da/ed7c16b764d9291cc77280cba3a7350847cdf2": "32bdfd8a34c150fc2097ff716f2858b8",
".git/objects/dc/67709065c0668331f132425c089de86155c042": "618ea7e765aef2356bfe1ce64519b207",
".git/objects/e0/5cf56a423bc311437593f67a3f992b873c9137": "b4e7e207f7daa9ce0465b10cfeeab375",
".git/objects/e1/0c2746c69f14d1cd42f42fda156df8260e6ef8": "f8ad788d87116fa280d288be75aea149",
".git/objects/e4/fa2260a49122d5481a25085fc3222b4a759047": "4ec9fe11b171289fcd4c699d7b055d41",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/763d170df67f0e0aa8c2ec86804f6e64b09cab": "a852195edf5886a54625389ac762f6f4",
".git/objects/e8/086674b59489fdd0f9c3aa31a15f75d115a47e": "1b1906a1eb8cf961b071a95688e910a7",
".git/objects/ea/c0396c2a7165e8351ca031f3573ca40be9719e": "1763a58c4df7e7a496fe16ca7e2d26e2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c8c887e849faa3ad9a092c152ae7d51b7b0969": "a085ef663e0cada7240168e16f170fbb",
".git/objects/ee/5cfa1d8bd0e016c0dd712c3afab2bfc1738087": "af9e3612182343877f5fd43c7b74bbb9",
".git/objects/f0/58ff22a7d02d5639d2bec06638ea0a5cae2c41": "78184a906948da8b3a654fabcc8b3ece",
".git/objects/f3/222e6b3ceecf5cdaa8031675393bd7c82c81f0": "d519983c689833abc5145883ccb8b194",
".git/objects/f4/ab3da4bab1279ee98e0c40eb2037384db78221": "7bbd83058abdfee7e88dd9c2776eb568",
".git/objects/f6/00965486221a2f93ee035a722c1407c2fe68e4": "40851fe31554500d675b954ce22d644d",
".git/objects/f6/dcbda5a7141e63e95909f3d15bad3e4c3fa8dd": "7c243092354ac8be9c038489bb8644a0",
".git/objects/f9/21e7094896a9243e11134e7fcda1a11adaf08d": "72f8396172ae6f7d7bf6e53866d0e881",
".git/objects/f9/c7f1c9266aa6195de935a2832de92cd7af0538": "6629f29d90fadb0e760f6a149f3b712b",
".git/objects/fb/8cd5d9efa0e0f3381e00f53d1a34890db4c408": "9f22965e9cd55c841b0c249cade22df2",
".git/objects/fc/7068588000948f6a54ec73db122a6142824343": "27e3c0069df0593a1877e52a9afd0f7d",
".git/objects/pack/pack-89a92125161f9ed13a67fb22c52eaf0708674a89.idx": "303ff58768b76032d49f50f3bf43d504",
".git/objects/pack/pack-89a92125161f9ed13a67fb22c52eaf0708674a89.pack": "992a7748d5e1d788ae97a0084f5eefa5",
".git/objects/pack/pack-98ad63e00e14960ef303775884261cda64fd372e.idx": "7819f462cd4e8f0bc5fb1ccba74b4cd2",
".git/objects/pack/pack-98ad63e00e14960ef303775884261cda64fd372e.pack": "6e8c66ca6fd1cbabfef5883a1f975a4d",
".git/ORIG_HEAD": "052bcd97fa50711e65c4d4f288ab5f73",
".git/refs/heads/deploy": "95f045ad9d7fa17525ef766e89857def",
".git/refs/remotes/origin/deploy": "95f045ad9d7fa17525ef766e89857def",
".git/refs/remotes/origin/master": "599f841f6068acef904e1c54d81a55cc",
".idea/Medlar-Technologies.github.io.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "6e3c1f0618a2ce9d7645225086956aa8",
".idea/shelf/Uncommitted_changes_before_Checkout_at_2_27_23,_12_31_PM_%5BChanges%5D/shelved.patch": "e2ada15fd8802af2d552c756932b3d47",
".idea/shelf/Uncommitted_changes_before_Checkout_at_2_27_23,_12_31_PM_%5BChanges%5D1/shelved.patch": "d41d8cd98f00b204e9800998ecf8427e",
".idea/shelf/Uncommitted_changes_before_Checkout_at_2_27_23__12_31_PM__Changes_.xml": "11b04cfa738a49b2af3bb3974c2e3d20",
".idea/shelf/Uncommitted_changes_before_Checkout_at_2_28_23,_4_22_PM_%5BChanges%5D/shelved.patch": "3f7a611128425b7a8ac115f5e8a051c8",
".idea/shelf/Uncommitted_changes_before_Checkout_at_2_28_23__4_22_PM__Changes_.xml": "736b706c48fb7ec2ee4e53daf253f3c0",
".idea/shelf/Uncommitted_changes_before_Update_at_2_28_23,_4_21_PM_%5BChanges%5D/shelved.patch": "ee9d3548d49674580fc5d945aecc8efb",
".idea/shelf/Uncommitted_changes_before_Update_at_2_28_23__4_21_PM__Changes_.xml": "09232ae124574f10fe0b1c7efa634dab",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/workspace.xml": "a6185c48d7bc8b503aa1ebb12813b500",
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
"index.html": "d02e7226b836708a75d23d8168e93cbc",
"/": "d02e7226b836708a75d23d8168e93cbc",
"main.dart.js": "f45f7cfe44585cd048b3422f11ab9f12",
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