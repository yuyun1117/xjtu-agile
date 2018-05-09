const anagram = require("../lib/anagram")

describe("anagram", ()=> {
    it("should return [] when input is empty string", ()=> {
        expect(anagram()).toEqual([])
    })

    it("should return [a] when input a", ()=> {
        expect(anagram("a")).toEqual(["a"])
    })

})