import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import moment from "moment";
import "flatpickr/dist/themes/material_blue.css";
import "./css/datePiker.scss";

moment.updateLocale("en", {
  week: { dow: 1 }, // Monday start
});

const getRangeByPreset = (preset) => {
  switch (preset) {
    case "today":
      return [
        moment().startOf("day").toDate(),
        moment().endOf("day").toDate(),
      ];

    case "thisWeek":
      return [
        moment().startOf("week").toDate(),
        moment().endOf("week").toDate(),
      ];

    case "lastWeek":
      return [
        moment().subtract(1, "week").startOf("week").toDate(),
        moment().subtract(1, "week").endOf("week").toDate(),
      ];

    case "thisMonth":
      return [
        moment().startOf("month").toDate(),
        moment().endOf("month").toDate(),
      ];

    case "lastMonth":
      return [
        moment().subtract(1, "month").startOf("month").toDate(),
        moment().subtract(1, "month").endOf("month").toDate(),
      ];

    case "thisYear":
      return [
        moment().startOf("year").toDate(),
        moment().endOf("year").toDate(),
      ];

    case "lastYear":
      return [
        moment().subtract(1, "year").startOf("year").toDate(),
        moment().subtract(1, "year").endOf("year").toDate(),
      ];

    default:
      return [];
  }
};

function DatePicker() {
  // ✅ Default mode & range
  const [mode, setMode] = useState("thisWeek");
  const [range, setRange] = useState(getRangeByPreset("thisWeek"));

  const setPreset = (preset) => {
    setMode(preset);
    setRange(getRangeByPreset(preset));
  };

  return (
    <div className="datePiker">
      <select
        value={mode}
        onChange={(e) => setPreset(e.target.value)}
        className="btn"
      >
        <option value="custom" style={{backgroundColor : "blue"}}>Custom date</option>
        <option value="thisWeek">This week</option>
        <option value="today">Today</option>
        <option value="lastWeek">Last week</option>
        <option value="thisMonth">This month</option>
        <option value="lastMonth">Last month</option>
        <option value="thisYear">This year</option>
        <option value="lastYear">Last year</option>
      </select>

      <Flatpickr
        className="FlatpickrInput"
        value={range}
        onChange={(dates) => setRange(dates)}
        options={{
          mode: "range",
          dateFormat: "d-m-Y",
          closeOnSelect: false, // important!
        }}
        disabled={mode !== "custom"}
      />
    </div>
  );
}

export default DatePicker;
