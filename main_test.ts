import { assertEquals } from "@std/assert";
import { add, sub } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function subTest() {
  assertEquals(sub(3, 2), 1);
});

Deno.test(function sub2Test() {
  assertEquals(sub(2, 3), -1);
});