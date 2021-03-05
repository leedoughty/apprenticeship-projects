const httpMocks = require("node-mocks-http");
const axios = require("axios");
const { getPhotoOfTheDay } = require("./getPhotoOfTheDay");
const API_KEY = require("./apiKey");

jest.mock("axios");

describe("Middleware - getPhotoOfTheDay", () => {
  let fakeRequest;
  let fakeResponse;
  let fakeNext;

  beforeEach(() => {
    fakeRequest = httpMocks.createRequest();
    fakeResponse = httpMocks.createResponse();
    fakeNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should make a GET request to the expected APOD URL", async () => {
    const BASE_URL = "https://api.nasa.gov/planetary/apod";

    await getPhotoOfTheDay(fakeRequest, fakeResponse, fakeNext);

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}?api_key=${API_KEY}`);
  });

  it("should call axios one time", async () => {
    await getPhotoOfTheDay(fakeRequest, fakeResponse, fakeNext);

    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  // it.skip("should return the expected data from the NASA api", async () => {
  //   const expectedData = {
  //     data: {
  //       date: "2021-03-01",
  //       explanation: "This pic was taken on the moon",
  //       url: "https://apod.pic.com/1.jpg",
  //     },
  //   };

  //   axios.get.mockImplementationOnce(() => Promise.resolve(expectedData));

  //   const data = await getPhotoOfTheDay(fakeRequest, fakeResponse, fakeNext);

  //   expect(data).toEqual(expectedData);
  // });
});
