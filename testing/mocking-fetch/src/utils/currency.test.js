import { convert } from "./currency";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { USD: 1.3 } }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("converts GBP to USD", async () => {
  const rate = await convert("GBP", "USD");

  expect(rate).toEqual(1.3);
  expect(rate).toHaveBeenCalledTimes(1);
});

it("handles expection with null", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("API failure"));

  const rate = await convert("GBP", "USD");

  expect(rate).toEqual(null);
  expect(fetch).toHaveBeenCalledWith(
    "https://api.exchangeratesapi.io/latest?base=GBP"
  );
});
