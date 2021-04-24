const { pretty_print, backend_request } = require('./utils')
const { ACCOUNT_2_ADDRESS, ACCOUNT_2_SEC_VIEW_KEY } = require('./config')

async function main()
{

    let start_memory_used = process.memoryUsage().heapUsed
    const login_result = await backend_request('login', {
        address: ACCOUNT_2_ADDRESS,
        view_key: ACCOUNT_2_SEC_VIEW_KEY,
        create_account: true,
        generated_locally: false
    })
    pretty_print('login', login_result, start_memory_used)


    start_memory_used = process.memoryUsage().heapUsed
    const address_info_result = await backend_request('get_address_info', {
        address: ACCOUNT_2_ADDRESS,
        view_key: ACCOUNT_2_SEC_VIEW_KEY
    })
    pretty_print('get_address_info', address_info_result, start_memory_used)


    start_memory_used = process.memoryUsage().heapUsed
    const address_txs_result = await backend_request('get_address_txs', { 
        address: ACCOUNT_2_ADDRESS,
        view_key: ACCOUNT_2_SEC_VIEW_KEY,
    })
    pretty_print('get_address_txs', address_txs_result, start_memory_used)
    console.log('Transactions:', address_txs_result.transactions.length, '\n\n\n')

}
main()
