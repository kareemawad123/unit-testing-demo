import { SquarePipeForLab } from "./square.pipe"

describe("1-square pipe isolation test:", () => {
  let pipe: SquarePipeForLab;
  beforeEach(() => {
    pipe = new SquarePipeForLab();
  })
  it("expect to retrun 16 when passing 4", () => {
    let result = pipe.transform(4)

    expect(result).toEqual(16);
  })
  it("expect to retrun 'Not a number' when passing wrong parameter", () => {
    let result = pipe.transform("wrong");

    expect(result).toEqual("Not a number");
  })
})
