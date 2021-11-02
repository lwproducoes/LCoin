import { newBlock } from "../core/block";

test("Novo Bloco", () => {
  expect(newBlock("oie")).toEqual({
    value: "oie",
    hash: null,
  });
});
