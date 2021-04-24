const haven = require('haven-core-js/index')
const { pretty_print, backend_request } = require('./utils')
const config = require('./config')

const SENDING_AMOUNT = '10000000000'
const SOURCE_ASSET_TYPE = 'XUSD'
const DEST_ASSET_TYPE = 'XUSD'

/**
 * 
 * Account 1 sends Account 2, 1 XUSD.
 * 
 */
async function main()
{
    const haven_utils = await haven.haven_utils_promise

    await backend_request('login', {
        address: config.ACCOUNT_1_ADDRESS,
        view_key: config.ACCOUNT_1_SEC_VIEW_KEY,
        create_account: true,
        generated_locally: false
    })

    /**
     * 
     * Construct and send a transaction
     * 
     * edge-currency-monero: https://github.com/EdgeApp/edge-currency-monero/blob/b3112c245387c92533ca1bd0f018a824a30ff88a/src/xmrEngine.js#L775-L796
     * mymonero-core-js [Edge fork]: https://github.com/EdgeApp/mymonero-core-js/blob/c63ab750d169725a980e63c53ea7dab2c4161aa1/js-src/myMoneroApi.js#L162-L248
     * mymonero-core-js [Edge fork]: https://github.com/EdgeApp/mymonero-core-js/blob/c63ab750d169725a980e63c53ea7dab2c4161aa1/monero_utils/monero_sendingFunds_utils.js#L198
     * mymonero-core-js [Edge fork]: https://github.com/EdgeApp/mymonero-core-js/blob/c63ab750d169725a980e63c53ea7dab2c4161aa1/monero_utils/monero_sendingFunds_utils.js#L243
     * react-native-mymonero-core: https://github.com/EdgeApp/react-native-mymonero-core/blob/0c77c0913bffc2a686990bb5823d60cd6ed65265/src/mymonero-wrapper/mymonero-methods.cpp#L21-L22
     * 
     * havenwallet-core-cpp: https://github.com/haven-protocol-org/havenwallet-core-cpp/blob/f46617c74dff4ed455e2a9c1f8415d3fb4c24646/src/serial_bridge_index.hpp#L47-L48
     * 
     */
    let start_memory_used = process.memoryUsage().heapUsed
    haven_utils.async__send_funds({
        is_sweeping: false, 
        payment_id_string: null, // may be nil or undefined
        sending_amount: SENDING_AMOUNT,
        from_address_string: config.ACCOUNT_1_ADDRESS,
        sec_viewKey_string: config.ACCOUNT_1_SEC_VIEW_KEY,
        sec_spendKey_string: config.ACCOUNT_1_SEC_SPEND_KEY,
        pub_spendKey_string: config.ACCOUNT_1_PUB_SPEND_KEY,
        to_address_string: config.ACCOUNT_2_ADDRESS,
        from_asset_type: SOURCE_ASSET_TYPE,
        to_asset_type: DEST_ASSET_TYPE,
        priority: 1, // simple_priorty
        unlock_time: 0, // gets set by lib 
        nettype: haven.nettype_utils.network_type[config.nettype],
        blockchain_height: 0,
        pricing_record: undefined, // only needed for conversions
        //
        get_unspent_outs_fn: async function(req_params, cb)
        {
            const unspent_outs = await backend_request('get_unspent_outs', req_params)
            cb(null, unspent_outs)
        },
        get_random_outs_fn: async function(req_params, cb)
        {
            const random_outs = await backend_request('get_random_outs', req_params)
            cb(null, random_outs)
        },
        submit_raw_tx_fn: async function(req_params, cb)
        {
            const submit_raw = await backend_request('submit_raw_tx', req_params)
            cb(null, submit_raw)
        },
        //
        status_update_fn: function(params)
        {
            console.log("> Send funds step " + params.code + ": " + params.msg)
        },
        error_fn: function(params)
        {
            console.error("Error occurred.... ", params.err_msg, params)
        },
        success_fn: function(result)
        {
            pretty_print('async__send_funds', result, start_memory_used)
        }
    })

}
main()
