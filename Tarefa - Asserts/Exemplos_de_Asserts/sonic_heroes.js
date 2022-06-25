import {
    assertEquals,
    assertArrayIncludes
} from "http://deno.land/std/testing/asserts.ts"

let speed_type = 'Sonic'
let team_heroes = ['Sonic', 'Tails', 'Knuckles']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(speed_type, "Sonic"); 
    assertArrayIncludes(team_heroes, ["Tails", speed_type]); 
})
