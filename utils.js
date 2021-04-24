const fetch = require('node-fetch')
const { havenApiServer } = require('./config')

const pretty_print = (meta, result, start_memory_used) => {
    const memory_used = (process.memoryUsage().heapUsed - start_memory_used) / 1024 / 1024

    // approximation for size of result
    const result_size = JSON.stringify(result).length * 2 / 1024 / 1024

    console.log('\n')
    console.log('*******************')
    console.log(meta, '\n')
    console.log('Memory used (MB):', Number(memory_used.toFixed(1)))
    console.log('Result size (MB):', Number(result_size.toFixed(3)))
    console.log('\n\n')
    console.log(result)
    console.log('\n\n')
    console.log('*******************')
    console.log('\n')
}

const print_memory_usage_stats = (memory_usage_stats = process.memoryUsage(), diff_memory_usage_stats) => {
    console.log()
    for (let key in memory_usage_stats) {
        const diff = memory_usage_stats[key] - (diff_memory_usage_stats ? diff_memory_usage_stats[key] : 0)
        console.log(key, padding(key), '(MB)  ', Number(diff / 1024 / 1024).toFixed(1))
    }
    console.log('\n\n')

    return memory_usage_stats
}

const padding = (key) => {
    const desired_len = 15
    return ' '.repeat(desired_len - key.length)
}

const backend_request = async (endpoint, params) => {
    const result = await fetch(havenApiServer + endpoint, { 
        method: 'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' },
    })
    return result.json()
}

module.exports = {
    pretty_print,
    print_memory_usage_stats,
    padding,
    backend_request,
}