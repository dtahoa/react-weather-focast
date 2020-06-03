import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WeatherContainer from "./index";
import { mockWeatherData, mockForecastData } from "../../__mocks__/Weather.mock";

jest.mock('../../hooks', () => {
  return jest.fn(searchCity => searchCity);
});

describe("<WeatherContainer />", () => {
  afterEach(() => jest.restoreAllMocks());

  test("fetches and then renders the current weather and forecast", async () => {
    jest
      .spyOn(window, "fetch")
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockWeatherData)
        } as any)
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockForecastData)
        } as any)
      );

    render(<WeatherContainer />);

    const cityNameEl = await screen.findByText("Eldoret KE");
    expect(cityNameEl).toBeInTheDocument();
    expect(screen.getByText("Eldoret KE")).toBeInTheDocument();
    expect(screen.getByText("Thu, 5:24PM")).toBeInTheDocument();
    expect(screen.getByText("20°C")).toBeInTheDocument();
    expect(screen.getByText("Broken Clouds")).toBeInTheDocument();
    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("Sunday")).toBeInTheDocument();
    expect(screen.getByText("Monday")).toBeInTheDocument();
    expect(screen.getByText("Tuesday")).toBeInTheDocument();
    expect(window.fetch).toHaveBeenCalledTimes(2);
  });

  test("renders loading spinner & an error if there's a problem getting weather data", async () => {
    const mockErrorResponse = {
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      message: "An internal server error occurred"
    };

    jest
      .spyOn(window, "fetch")
      .mockImplementation(() => Promise.reject(mockErrorResponse));

    render(<WeatherContainer />);

    // loading spinner
    await screen.findByRole("progressbar");
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByText(mockErrorResponse.message)).toBeInTheDocument();
  });
});
