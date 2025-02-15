import React from "react";
import {FormattedDate, FormattedNumber} from 'react-intl';

const Job = (props) => {
  console.log('language', navigator.language); 
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        <FormattedNumber
          value = {props.offer.salary}
        />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
    </tr>
  );
};

export default Job;
