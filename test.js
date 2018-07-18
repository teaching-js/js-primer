#!/usr/bin/env node

const o = {
   bb: 0,
   f() {
      return this.bb
   }
}

console.log(o.f())

let a = o.f

console.log(a())

const oo = {
   bb: "Barry"
}

console.log(a.call(oo))

const f = a.bind(oo)

console.log(f())


function Person(firstName, lastName, age) {
   this.firstName = firstName
   this.lastName  = lastName
   this.age       = age
}

Person.prototype.getFullName = function() {
   return this.firstName + " " + this.lastName
}

Person.prototype.canDrinkAlcohol = function() {
   return this.age >= 18
}

console.log(new Person("Jeff", "Goldblum", 50))
