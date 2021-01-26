const { loadTitle } = require("./util");

it("should print uppercase text", () => {
  loadTitle().then((title) => {
    expect(title).toBe("DELECTUS AUT AUTEM");
  });
});
