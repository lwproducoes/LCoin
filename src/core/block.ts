import sha256 from "crypto-js/sha256";

type BlockObject = {
  value: string;
  hash: string;
};

let difficulty: number = 3;
let prefix: string = "0fx";

let generateBlock = (data: string, index: number = 0): BlockObject =>
  Object({
    value: data,
    hash: sha256(data + new Date() + index).toString(),
  });

let validateBlock = (data: string) => {
  while (true) {
    const blocks: any[] = [];

    for (let i = 0; i < 10; i++) {
      const block = generateBlock(data);

      blocks.push(block);
    }

    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];

      if (block.hash.substring(0, difficulty) === prefix) {
        return block;
      }
    }
  }
};

export let newBlock = (data: string) => validateBlock(data);

console.time("track #1");
console.log(newBlock("J4G3Dev"));
console.timeEnd("track #1");

console.time("track #2");
console.log(newBlock("J4G3Dev"));
console.timeEnd("track #2");

console.time("track #3");
console.log(newBlock("J4G3Dev"));
console.timeEnd("track #3");
