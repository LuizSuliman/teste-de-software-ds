import {
    assertStrictEquals
} from "http://deno.land/std/testing/asserts.ts"

let Sonic = 'Hedgehog'
let Shadow = 'Hedgehog'

Deno.test("Teste de assertions (API)", () => {
    assertStrictEquals(Sonic, Shadow); 
})
