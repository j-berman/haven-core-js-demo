const haven = require("haven-core-js/index")
const { pretty_print, backend_request } = require("./utils")
const { locale, nettype } = require('./config')

/**
 * 
 * Creates an "account 2" that will receive xUSD from "account 1", an account
 * that is already holding some xUSD. The resulting address_string and 
 * sec_viewKey_string from newly_created_wallet should be placed in ./config.js
 * 
 */
async function main()
{
    const start_memory_used = process.memoryUsage().heapUsed

    /**
     * 
     * Initialize the Haven utils from haven-core-js
     * 
     * edge-currency-monero: https://github.com/EdgeApp/edge-currency-monero/blob/b3112c245387c92533ca1bd0f018a824a30ff88a/src/xmrPlugin.js#L50
     * mymonero-core-js [Edge fork]: https://github.com/EdgeApp/mymonero-core-js/blob/c63ab750d169725a980e63c53ea7dab2c4161aa1/indexMoneroCore.rn.js#L48-L56
     * 
     */
	const haven_utils = await haven.haven_utils_promise

    /**
     * 
     * Create a new wallet
     * 
     * edge-currency-monero: https://github.com/EdgeApp/edge-currency-monero/blob/b3112c245387c92533ca1bd0f018a824a30ff88a/src/xmrPlugin.js#L72
     * mymonero-core-js [Edge fork]: https://github.com/EdgeApp/mymonero-core-js/blob/c63ab750d169725a980e63c53ea7dab2c4161aa1/js-src/myMoneroApi.js#L89
     * react-native-mymonero-core: https://github.com/EdgeApp/react-native-mymonero-core/blob/0c77c0913bffc2a686990bb5823d60cd6ed65265/src/mymonero-wrapper/mymonero-methods.cpp#L19
     * 
     * havenwallet-core-cpp: https://github.com/haven-protocol-org/havenwallet-core-cpp/blob/f46617c74dff4ed455e2a9c1f8415d3fb4c24646/src/serial_bridge_index.hpp#L57
     * 
     */ 
    const newly_created_wallet = await haven_utils.newly_created_wallet(
        locale, haven.nettype_utils.network_type[nettype]
    )
    pretty_print('newly_created_wallet', newly_created_wallet, start_memory_used)

    /**
     * 
     * Creates the account in the backend at the current block height.
     * 
     */
    await backend_request('login', {
        address: newly_created_wallet.address_string,
        view_key: newly_created_wallet.sec_viewKey_string,

        // tells the backend to start searching for tx's at current height, and not 0.
        // this way no need to rescan entire blockchain to search for address' tx's
        create_account: true,
        generated_locally: true
    })

}
main()
