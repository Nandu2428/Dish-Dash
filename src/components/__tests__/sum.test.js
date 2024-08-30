import { sum } from "../sum";
test("sum function to calculate multiply of two numbers", () => {
    const res = sum(2, 3);
    expect(res).toBe(5);
});