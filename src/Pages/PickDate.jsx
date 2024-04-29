import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    // Define an array of dates to be disabled
    const disabledDates = [
        new Date("2024-04-28"), // Example date to disable
        new Date("2024-05-01"), // Another example date to disable
        // Add more dates here as needed
    ];

    const times = [
        '8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am'
    ]

    return (
        <div>
            <h2>When can you drop off your car</h2>
            <DatePicker open={true}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                excludeDates={disabledDates} // Pass the array of disabled dates
                showTimeInput={false}
            />
            <div style={{
                marginTop: '30px'
            }}>
                <h3 >Times for {startDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}</h3>

                <div style={{ display: 'flex', gap: '5px', paddingTop: '15px' }}>
                    {times.map(time => <div key={time}
                        className={selectedTime === time ? "selected-time" : "time-slot"} // Apply CSS class based on selection
                        onClick={() => setSelectedTime(time)}
                    >
                        <span>{time}</span>
                    </div>)}
                </div>
            </div>
        </div>

    );
};

export default Example;