const assert = require('assert')
const make_person = require('./objects')

describe("Make Person", () => {
  it("Fields", () => {
     const res = make_person("barry",23)
     assert.equal(res.name,"barry")
     assert.equal(res.age,23)
  })
  it("Beer", () => {
     let res = make_person("barry",23)
     assert.equal(res.can_drink(),true)
     res = make_person("harry",5)
     assert.equal(res.can_drink(),false)
  })
  it("Edge Case", () => {
     let res = make_person("barry",18)
     assert.equal(res.can_drink(),true)
  })
  it("binding", () => {
     let barry = make_person("barry",18)
     let billy = make_person("billy",5)
     assert.equal(barry.can_drink(),true)
     assert.equal(billy.can_drink(),false)
     barry.age = 0
     billy.age = 19
     assert.equal(barry.can_drink(),false)
     assert.equal(billy.can_drink(),true)
  })
})
