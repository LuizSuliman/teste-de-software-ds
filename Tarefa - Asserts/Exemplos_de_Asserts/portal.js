import {
    assertNotStrictEquals
} from "http://deno.land/std/testing/asserts.ts"

let formatado = 'GLaDOS';
let nao_formatado = 'GLADOS';

Deno.test("Teste de assertions (API)", () => {
    assertNotStrictEquals(formatado, nao_formatado); 
})
