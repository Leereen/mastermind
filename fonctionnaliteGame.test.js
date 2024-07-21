const { statutValue, checkColor } = require("./fonctionnaliteGame");

jest.mock("./documentLib");

describe("FonctionnaliteGame tests", () => {
    test("Testing statutValue does not fail (appendToCheck correctly mocked)",
         () => {
             expect(statutValue(1, 2, 3)).toBe(undefined);
         });

    test("Check color right",
         () => {
             expect(checkColor([1, 1, 1, 1], [1, 1, 1, 1])).toBe(true);
         });

    test("Check color wrong",
         () => {
             expect(checkColor([1, 1, 1, 0], [1, 1, 1, 1])).toBe(false);
         });
});
