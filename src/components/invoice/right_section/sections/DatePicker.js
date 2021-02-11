import 'date-fns';
import { format } from 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

export default function MaterialUIPickers(props) {
  const handleDateChange = (date) => {
    const formattedDate = format(date, 'MM/dd/yy');
    props.setSelectedDate(formattedDate);
    props.setInvoiceSearch('');
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        InputProps={{ style: { fontSize: '1.5rem', marginLeft: '1rem' } }}
        margin='normal'
        id='date-picker-dialog'
        // label='Date picker dialog'
        format='MM/dd/yyyy'
        value={props.selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
