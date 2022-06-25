import {
    assertNotEquals
} from "http://deno.land/std/testing/asserts.ts"

let Act1 = 'Classic'
let Act2 = 'Modern'

Deno.test("Teste de assertions (API)", () => {
    assertNotEquals(Act1, Act2); 
})
