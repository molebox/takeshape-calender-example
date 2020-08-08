/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import {useMutation, gql} from '@apollo/client';
import Modal from 'react-modal';

const CREATE_CALENDAR_EVENT = gql`
    mutation CREATE_EVENT($input: UpdateEventInput!) {
    updateEvent(input: $input) {
        result {
        date
        description
        }
    }
}

`;

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#yourAppElement')

const TakeShapeCalendar = () => {
    const [date, setDate] = React.useState(new Date());
    const [createEvent, {data, error, loading}] = useMutation(CREATE_CALENDAR_EVENT)

    const onChange = (date) => {
        const chosenDate = moment(date);
        const formateDate = chosenDate.format('MMMM Do YYYY')
        console.log({formateDate})
        // setDate({date})
    }

    return (
        <Calendar
            sx={{
                width: '100%',
                height: 'max-content'
            }}
            onChange={onChange}
            value={date}
        />
    )
}

export default TakeShapeCalendar;