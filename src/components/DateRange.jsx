import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker } from "@material-ui/pickers";

export default function DateRange() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <DatePicker inputVariant="outlined" label="Basic example" value={selectedDate} onChange={handleDateChange} animateYearScrolling />
        <div style={{ width: 15 }}></div>
        <DatePicker inputVariant="outlined" label="Basic example" value={selectedDate} onChange={handleDateChange} animateYearScrolling />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
