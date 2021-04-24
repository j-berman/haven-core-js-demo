const { print_memory_usage_stats } = require("./utils")


//////////////////////////////////////////////////////////
//      Haven core js memory usage  - Demo for Edge     //
//////////////////////////////////////////////////////////


console.log('\nBefore loading mymonero-core-js:')
const start_memory_usage_stats = print_memory_usage_stats()


//////////////////////////////////////////////////////////


console.log('After loading mymonero-core-js:')
const mymonero = require("mymonero-core-js/index")
print_memory_usage_stats()


//////////////////////////////////////////////////////////


console.log('After loading mymonero-core-js monero_utils:')
mymonero.monero_utils_promise.then(() => {
    const final_memory_usage_stats = print_memory_usage_stats()

    console.log('*******************\n')
    console.log('Final - Start\n')
    print_memory_usage_stats(final_memory_usage_stats, start_memory_usage_stats)
})

/**
 
    rss stands for Resident Set Size, it is the total memory allocated for the 
    process execution

    heapTotal is the total size of the allocated heap

    heapUsed is the actual memory used during the execution of our process
    
    external is, according to the documentation, the memory used by 
    "C++ objects bound to JavaScript objects managed by V8"


    source: https://www.valentinog.com/blog/node-usage/

 */