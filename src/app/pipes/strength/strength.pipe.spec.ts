import { StrengthPipe } from "./strength.pipe"

describe("strength pipe:", () => {
    let pipe: StrengthPipe
    beforeEach(() => {
        pipe = new StrengthPipe()
    })
    it("expect to return weak when passing 3", () => {
        expect(pipe.transform(3)).toBe(3 + " (weak)")

    })
    it("expect to return strong when passing 11", () => {
        expect(pipe.transform(11)).toContain("strong")

    })

})