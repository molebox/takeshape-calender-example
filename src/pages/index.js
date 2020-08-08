/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import TakeShapeCalendar from './../components/calendar';

export default () => {
 

    return (
        <div sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3,
            maxWidth: 1440,
            margin: '0 auto',
            height: '100vh'
        }}>
            <TakeShapeCalendar/>
        </div>
    )
}