const { pretty_print, backend_request } = require("./utils")
const { ACCOUNT_1_ADDRESS, ACCOUNT_1_SEC_VIEW_KEY } = require('./config')

/**
 * 
 * Account 1 is expected to have some assets already held in the account.
 * This example logs the account into the backend, retrieves the account's
 * asset balances, and the account's transactions.
 * 
 */
async function main()
{
    /**
     * 
     * Log in to the Haven server
     * 
     * edge-currency-monero: https://github.com/EdgeApp/edge-currency-monero/blob/b3112c245387c92533ca1bd0f018a824a30ff88a/src/xmrEngine.js#L192
     * 
     */
    let start_memory_used = process.memoryUsage().heapUsed
    const login_result = await backend_request('login', {
        address: ACCOUNT_1_ADDRESS,
        view_key: ACCOUNT_1_SEC_VIEW_KEY,
        create_account: true,
        generated_locally: false
    })
    pretty_print('login', login_result, start_memory_used)


    /**
     * 
     * Get balances of different assets held by the address
     * 
     * edge-currency-monero: https://github.com/EdgeApp/edge-currency-monero/blob/b3112c245387c92533ca1bd0f018a824a30ff88a/src/xmrEngine.js#L222
     * mymonero-core-js [Edge fork]: https://github.com/EdgeApp/mymonero-core-js/blob/c63ab750d169725a980e63c53ea7dab2c4161aa1/js-src/myMoneroApi.js#L136-L160
     * 
     */
    start_memory_used = process.memoryUsage().heapUsed
    const address_info_result = await backend_request('get_address_info', {
        address: ACCOUNT_1_ADDRESS,
        view_key: ACCOUNT_1_SEC_VIEW_KEY
    })
    pretty_print('get_address_info', address_info_result, start_memory_used)


    /**
     * 
     * Get transactions sent/received by the address
     * 
     * edge-currency-monero: https://github.com/EdgeApp/edge-currency-monero/blob/b3112c245387c92533ca1bd0f018a824a30ff88a/src/xmrEngine.js#L335
     * mymonero-core-js [Edge fork]: https://github.com/EdgeApp/mymonero-core-js/blob/c63ab750d169725a980e63c53ea7dab2c4161aa1/js-src/myMoneroApi.js#L115-L134
     * 
     */
    start_memory_used = process.memoryUsage().heapUsed
    const address_txs_result = await backend_request('get_address_txs', { 
        address: ACCOUNT_1_ADDRESS,
        view_key: ACCOUNT_1_SEC_VIEW_KEY,
    })
    pretty_print('get_address_txs', address_txs_result, start_memory_used)
    console.log('Transactions:', address_txs_result.transactions.length, '\n\n\n')

}
main()
