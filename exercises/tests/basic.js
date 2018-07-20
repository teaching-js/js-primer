/* for non-dom exercies just use node for testing? */
const assert = require('assert')
const hello  = require('../solutions/hello_world')
const funcs  = require('../solutions/functions')

describe("Basic", () => {
   it("Hello World!", () => {
      assert(hello("Jeff") == "Hello Jeff")
   })

   it("Functions", () => {
      assert(funcs([(a, b) => a + b], [[1,2]]) == 3)
   })
})
