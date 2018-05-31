
const suite = require("./suite")

;(async () => {
    for (let i = 0; i < 10; i++)
        suite("rpm+consul://127.0.0.1:8500/test", i)
})().catch((err) => {
    console.log(`ERROR: ${err}`)
})
