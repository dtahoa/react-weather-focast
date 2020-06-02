import React from "react";
import dayjs from "dayjs";

export default function WeatherCardSubHeader(props: any) {
  const { currentWeather } = props;
  const date = dayjs(currentWeather.date).isValid() ? currentWeather.date : "";
  const description = currentWeather.description
    ? currentWeather.description
    : "";

  return (
    <>
      <span>
        {dayjs(date).format("dddd")}, {dayjs(date).format("h:mm")}{" "}
        {dayjs(date).format("A")},{" "}
        {description.replace(/\w\S*/g, (txt: any) => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
      </span>
    </>
  );
}
