## Demo of haven-core-js

This repo demos the core features of [haven-core-js](https://github.com/haven-protocol-org/haven-core-js), the JS library containing Haven crypto light wallet functions based on [mymonero-core-js](https://github.com/mymonero/mymonero-core-js). It provides memory usage statistics for each function call, as well as the haven-core-js library as a whole compared to mymonero-core-js. It runs in a node environment for simplicity.

## Results

### `node ./demo_0_haven_core_js_size.js`

Gets memory usage statistics from loading `haven-core-js` and the utilities contained within.

From: https://www.valentinog.com/blog/node-usage/

> `rss` stands for Resident Set Size, it is the total memory allocated for the 
process execution

> `heapTotal` is the total size of the allocated heap

> `heapUsed` is the actual memory used during the execution of our process

> `external` is, according to the documentation, the memory used by 
"C++ objects bound to JavaScript objects managed by V8"


```
Before loading haven-core-js:

rss         (MB)   30.5
heapTotal   (MB)   9.9
heapUsed    (MB)   5.4
external    (MB)   0.0



After loading haven-core-js:
Using wasm:  true

rss         (MB)   36.7
heapTotal   (MB)   12.1
heapUsed    (MB)   8.8
external    (MB)   18.0



After loading haven-core-js haven_utils:

rss         (MB)   54.7
heapTotal   (MB)   20.9
heapUsed    (MB)   17.1
external    (MB)   17.3



*******************

Final - Start


rss         (MB)   24.2
heapTotal   (MB)   11.0
heapUsed    (MB)   11.7
external    (MB)   17.3

```

### `node ./demo_1_mymonero_core_js_size.js`

Gets memory usage statistics from loading `mymonero-core-js` and the utilities contained within.

```

Before loading mymonero-core-js:

rss         (MB)   30.5
heapTotal   (MB)   9.9
heapUsed    (MB)   5.4
external    (MB)   0.0



After loading mymonero-core-js:
Using wasm:  true

rss         (MB)   37.5
heapTotal   (MB)   16.4
heapUsed    (MB)   8.3
external    (MB)   17.2



After loading mymonero-core-js monero_utils:

rss         (MB)   49.8
heapTotal   (MB)   22.4
heapUsed    (MB)   15.1
external    (MB)   17.2



*******************

Final - Start


rss         (MB)   19.3
heapTotal   (MB)   12.5
heapUsed    (MB)   9.8
external    (MB)   17.2

```

### `node ./demo_2_check_account_1.js`

Logs account 1 into the Haven backend, retrieves its asset balances, and retrieves its transactions. Note that the resulting arrays have the majority of their elements removed to make it easier to read.

```

*******************
login 

Memory used (MB): 0.4
Result size (MB): 0



{ generated_locally: false,
  new_address: false,
  start_height: 0,
  status: 'success' }



*******************



*******************
get_address_info 

Memory used (MB): 0.1
Result size (MB): 0.004



{ blockchain_height: 94202,
  locked_funds: '0',
  new_address: false,
  scanned_block_height: 92933,
  scanned_block_timestamp: 1619209886,
  scanned_height: 0,
  spent_outputs: 
   [ { amount: '5000000000000',
       asset_type: 'XUSD',
       key_image: '15d621dec9ea51de3a503310e1b3b78ca33bf9b218ed5809ef9c53bcf6111c51',
       mixin: 11,
       out_index: 0,
       tx_pub_key: '4df26633bd6d51e674d8e0c01ce636aa76a9be8f80bb37ef5561449c7b679f17' },
     { amount: '15000000000000',
       asset_type: 'XUSD',
       key_image: '7eb1a0a7bf38003933ab017690ad2d395a389e93c9096949c18908738a656455',
       mixin: 11,
       out_index: 0,
       tx_pub_key: '9cb940e3d9647ee6b26a715cc5782054cb620ce75fb802e22421e10942b3ddfe' } ],
  start_height: 0,
  status: 'success',
  total_received: 
   { XAG: '0',
     XAU: '1600000000000',
     XAUD: '0',
     XBTC: '0',
     XCAD: '0',
     XCHF: '0',
     XCNY: '0',
     XEUR: '2500000000000',
     XGBP: '0',
     XHV: '1180000000000000',
     XJPY: '0',
     XNOK: '0',
     XNZD: '0',
     XUSD: '379886454090000' },
  total_sent: 
   { XAG: '0',
     XAU: '0',
     XAUD: '0',
     XBTC: '0',
     XCAD: '0',
     XCHF: '0',
     XCNY: '0',
     XEUR: '1000000000000',
     XGBP: '0',
     XHV: '0',
     XJPY: '0',
     XNOK: '0',
     XNZD: '0',
     XUSD: '164938061760000' } }



*******************



*******************
get_address_txs 

Memory used (MB): 0.1
Result size (MB): 0.039



{ blockchain_height: 94202,
  new_address: false,
  scanned_block_height: 92933,
  scanned_block_timestamp: 1619209886,
  scanned_height: 0,
  start_height: 0,
  status: 'success',
  total_received: 
   { XAG: '0',
     XAU: '1600000000000',
     XAUD: '0',
     XBTC: '0',
     XCAD: '0',
     XCHF: '0',
     XCNY: '0',
     XEUR: '2500000000000',
     XGBP: '0',
     XHV: '1180000000000000',
     XJPY: '0',
     XNOK: '0',
     XNZD: '0',
     XUSD: '379886454090000' },
  total_received_unlocked: 
   { XAG: '0',
     XAU: '1600000000000',
     XAUD: '0',
     XBTC: '0',
     XCAD: '0',
     XCHF: '0',
     XCNY: '0',
     XEUR: '2500000000000',
     XGBP: '0',
     XHV: '1180000000000000',
     XJPY: '0',
     XNOK: '0',
     XNZD: '0',
     XUSD: '379886454090000' },
  transactions: 
   [ { coinbase: false,
       from_asset_type: 'XHV',
       hash: '14c726ac46841180146b3cc666a4b390e6f2cbbb23cd8cea276b81e5595f4e4f',
       height: 81161,
       id: 81268,
       mempool: false,
       mixin: 11,
       payment_id: 'be6dfe8c3a244b1f',
       timestamp: 1619174643000,
       to_asset_type: 'XHV',
       total_received: [Object],
       total_sent: [Object],
       tx_pub_key: '262706c7576a9497f34048ec50b4aa78279760742ecb436d9a93f6cd951a2764',
       unlock_time: 81171 },
     { coinbase: false,
       from_asset_type: 'XHV',
       hash: 'ace24dfc1c3553705117242677c2e1490b0dc84dbcb0ae180ca5757cd673f43c',
       height: 82237,
       id: 82368,
       mempool: false,
       mixin: 11,
       payment_id: 'f12f4eb9e38a9f82',
       timestamp: 1619202229000,
       to_asset_type: 'XHV',
       total_received: [Object],
       total_sent: [Object],
       tx_pub_key: 'e580896eb6721bcfeb9004251073e2ae705b4015e15d49167e4fbfc9136b8fdb',
       unlock_time: 82247 },
     { coinbase: false,
       from_asset_type: 'XUSD',
       hash: 'd136c29d29287ae4e092131b827984f32167ad8794cf5201e5f48f7b89778db0',
       height: 92889,
       id: 93021,
       mempool: false,
       mixin: 11,
       payment_id: '8764ae7e892b1b12',
       spent_outputs: [Array],
       timestamp: 1619234937000,
       to_asset_type: 'XUSD',
       total_received: [Object],
       total_sent: [Object],
       tx_pub_key: 'f5b36f2e3b5c74c7be8156d9f5b6050d944d06cca55ba6bb1b88e7d5007669d4',
       unlock_time: 92899 } ] }



*******************


Transactions: 26 

```

### `node ./demo_3_create_account_2.js`

Creates an "account 2" that will receive xUSD from "account 1", an account that is already holding some xUSD. Place the `address_string` and `sec_viewKey_string` in `config.js`.

```

*******************
newly_created_wallet 

Memory used (MB): 9.2
Result size (MB): 0.001



{ mnemonic_string: 'touchy adept films roster pivot eluded gesture fungal oncoming adopt pixels bluntly pruned irate cactus amply vain javelin muffin pegs liquid surfer desk eject adept',
  mnemonic_language: 'English',
  sec_seed_string: '2dfd5a4827c9da95d2587b4b7fc6ed73211cebb6e343b98316bda4d9ce64aa0c',
  address_string: 'hvta9nAW3X3H9hhDsnXFfGDXhgLebdb2u1EW3zPCpZqXiKMdK5ag99fCVrwV4m1zvrbmFLy1DYfAxW9PHJFB2bRN5GKBz5y5cB',
  pub_viewKey_string: 'c1c01cc33e44bd5bcf5070b3d7cfd56de9993cf0b1ae3e709f9e5edc15708548',
  sec_viewKey_string: '2c5fe1fe4b0133c327e7ca05d6606e3daec9eb08453f86da8733279ee717cb0a',
  pub_spendKey_string: '7d5c3d1bce608e014efd289d634ae8721e3dd89d560164441f6b39f086f703db',
  sec_spendKey_string: '2dfd5a4827c9da95d2587b4b7fc6ed73211cebb6e343b98316bda4d9ce64aa0c' }



*******************

```


### `node ./demo_4_send_to_account_2.js`

Account 1 sends account 2, 1 XUSD.


```

*******************
async__send_funds 

Memory used (MB): 2.2
Result size (MB): 0.007



{ used_fee: '314910000',
  total_sent: '10314910000',
  mixin: 10,
  serialized_signed_tx: '03000103000b9050e5b602c9d702f57afc9602c401d212df01b22ee440ef0c369129cbd8993501ef5495c6b8e43aed5fa22c15378a17bc5b58e99ede1825cf020003c89389bec4c4fbc822b34cdf1a95e2842e65628d5c7a131a87cbcaf056ea607a000365e909d8791bff5fc1608d529bfb7784fb715e09a168aeeba228cb2905eedfad3701d6cf5911f23d66c26757d9ca324ce2a5467b7584686a1a881d24b8f332d5ec4d020901126bed881cebceef1709585553442d585553440009585553442d5855534400000600b0ca949601000000001f08388da25865de0cc3a931d69b6e2b0100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000037d96cc7fe6ce367ea4b5216e7c307edeb4b9d6e5fbf8c63de5074ea6ee44e6baa627a1e45f217b8f9423ff99a013874065b8776dfa9a2780fd7edf21f16689501000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000015d8541d041b1e279be4f3554839ad9e318049a68306c9c42b1998830dc6bb362c8d07d25b79f8f914856fbd1d107d725317c76f9cb873840195df493d6b318c8f164c1d3a1bec17852d6e886fed0563002ef680786ac0ca4c6fb23deec5ba309dd6fb6a6259becf07a4f831509e39093f93419999a3cc3284ef0e83beb2a1fb6def92c3e7b37f0f46e060f01cc86df7ec1210815d12943417a9845f9c0ca1e022d300a756a8ccfc0f5980467151b39dc605798ff4793a7cb96203cecbe984e0907cb9e50c35aa434317abb57574c14f9e508819322d739ae0ce21829cdc5fc06a47b098d951e29a38bafaf8ee3f325cd4f9ce0b5715a938e3d346e24873766212eaf9e982d435eba02da2d60ddaf6077b345a4583bdf2b319a8e227bc4671955becb3f87d9b3ff2bc6b74fc97db17b3ce7373786102345a6ca697b1bdd7b1c06d1f6e20724f8dd4cab540818d460be8e82be96d709004acd43aa582daae4bf82c2ffe57968c50ec146df677c08652666a3a5229077b47881cb219663b53d1cf909f87a5ead2879e8c662b59f2a8feaa1b38b1b19e7aba78fc28119f106c41d1c95070741a76a898472783384684bcac7cd7ee046b3874b1741ffbba056cf0bf3ae1a4aba9f9e8e36cd91bbae49cea3f093fd3e880d29199002b64bc7ec15f73c59e84569cc895011847d75a33435a57ef04fbb25de2ec6c4fdde3841a8d77c404707a848a794d2280960f107ccaa152b3018491f913399c6c771c8b5b7eb1ec13d9f0a02a2f50d5b926c48e7818501afdcb6f83c9a1fe2a897f86de7296d4c478f01c3b546ad95ec8a0a7d7d0ea0a826f90f1d1b8ce154849c0858cbe2702da7b9185eac14ffe9b5708d169fce0e4801cc74daf72a97296869c49834b7740fe18e74a10c67c06e2b1ba9fdee1cf1e4690d68bd1eb24df3c1a531ad969700f09b2c0645312279afef7be2cf37cb056e0203402cde6fde8f067d1e41050601ead8100cba9fdf4e7d182375169e74063849410600ab075874ab3e28cc3de4b06a6a0005be98b74654125c67b8100736d09141d93d533ecc4f2deeb405297078c09b80027c06d15250f52b041f00537fd923a9439d5b4e32f3db0992fd89042c67ae96004d6434a13b659618fbbc07c44858a9c735ec02266f167d055c8ca0f4e91c670b22053c98381cf605c9dc642c254635c46e2fcc3f86a34f1adbc4552068e8fb03c9582c5db98e545ed68222b990cec5b87a8328bb9d907665800c33d818160d0b4e461e0e85dce6ea977fd7d40ad9c7d539d977dfa8ccda317e9837e98fcefa082df16fb4c8391ba7d37ab40b3f34d230f0b5e8b2582ada8b94d1bbbc67459507e52234c60e77615c9ac2523caf0e463f0f29446bd57dc6ecd8e13d036f669905967f23d8217f8b6f208895dc4199454be220a4c35b7b4d4a77ac5fa9893e4e0338a9b83e631f95cb0c3d26798a4e6f5a5f6a6e1d4d98c50915bb13769a026b029658ace6bc58b46424a8c070c59d85a190a30464995565f1205387b68e8d590dd35dc1dee47befbef1f088813d66d1cb1cc7e7fea2663aa68030101e3833cb07c987869f83cd9934bebceb9860eda1735c9cdb5e890140e778f41d91f236c830448d8020206785f1c43ac5b8bb6c76fae7a9123bfbb4875d2d0c313074f345a7',
  tx_hash: '07e800987e2d8ddbcc49985c2646750728854a5defbd861b1497f6413b65cc91',
  tx_key: 'f86c4cab3156e918f292f8c4befa50bc01b570a170597e54b34f26adccf3e70e',
  tx_pub_key: 'd6cf5911f23d66c26757d9ca324ce2a5467b7584686a1a881d24b8f332d5ec4d' }



*******************

```

### `node ./demo_5_check_account_2.js`

Account 2 checks its account.

```



*******************
login 

Memory used (MB): 0.4
Result size (MB): 0



{ generated_locally: false,
  new_address: false,
  start_height: 0,
  status: 'success' }



*******************



*******************
get_address_info 

Memory used (MB): 0.1
Result size (MB): 0.001



{ blockchain_height: 94408,
  locked_funds: '0',
  new_address: false,
  scanned_block_height: 94408,
  scanned_block_timestamp: 1619215121,
  scanned_height: 0,
  spent_outputs: [],
  start_height: 0,
  status: 'success',
  total_received: 
   { XAG: '0',
     XAU: '0',
     XAUD: '0',
     XBTC: '0',
     XCAD: '0',
     XCHF: '0',
     XCNY: '0',
     XEUR: '0',
     XGBP: '0',
     XHV: '0',
     XJPY: '0',
     XNOK: '0',
     XNZD: '0',
     XUSD: '10000000000' },
  total_sent: 
   { XAG: '0',
     XAU: '0',
     XAUD: '0',
     XBTC: '0',
     XCAD: '0',
     XCHF: '0',
     XCNY: '0',
     XEUR: '0',
     XGBP: '0',
     XHV: '0',
     XJPY: '0',
     XNOK: '0',
     XNZD: '0',
     XUSD: '0' } }



*******************



*******************
get_address_txs 

Memory used (MB): 0.1
Result size (MB): 0.002



{ blockchain_height: 94408,
  new_address: false,
  scanned_block_height: 94408,
  scanned_block_timestamp: 1619215121,
  scanned_height: 0,
  start_height: 0,
  status: 'success',
  total_received: 
   { XAG: '0',
     XAU: '0',
     XAUD: '0',
     XBTC: '0',
     XCAD: '0',
     XCHF: '0',
     XCNY: '0',
     XEUR: '0',
     XGBP: '0',
     XHV: '0',
     XJPY: '0',
     XNOK: '0',
     XNZD: '0',
     XUSD: '10000000000' },
  total_received_unlocked: 
   { XAG: '0',
     XAU: '0',
     XAUD: '0',
     XBTC: '0',
     XCAD: '0',
     XCHF: '0',
     XCNY: '0',
     XEUR: '0',
     XGBP: '0',
     XHV: '0',
     XJPY: '0',
     XNOK: '0',
     XNZD: '0',
     XUSD: '10000000000' },
  transactions: 
   [ { coinbase: false,
       from_asset_type: 'XUSD',
       hash: '07e800987e2d8ddbcc49985c2646750728854a5defbd861b1497f6413b65cc91',
       height: 94281,
       id: 94414,
       mempool: false,
       mixin: 11,
       payment_id: '126bed881cebceef',
       timestamp: 1619214644000,
       to_asset_type: 'XUSD',
       total_received: [Object],
       total_sent: [Object],
       tx_pub_key: 'd6cf5911f23d66c26757d9ca324ce2a5467b7584686a1a881d24b8f332d5ec4d',
       unlock_time: 94291 } ] }



*******************



Transactions: 1 

```


## How to use it

First, you need a running [havenwallet-backend](https://github.com/haven-protocol-org/havenwallet-backend).

Then run `npm i` and you're good to go.


