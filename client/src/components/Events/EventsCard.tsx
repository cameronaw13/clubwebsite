import React from 'react';

interface EventsCardInterface {
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    location: string[],
    link?: string
}

const EventsCard: React.FC<EventsCardInterface> = ({
    name = "Event Title",
    date = "January 1st, 1970",
    startTime = "12:00am",
    endTime = "11:59pm",
    location = ["N/A"],
    link = ""
}) => {
    return (
        <div className="EventCard">
            <h3>
                {link ? <a href={link}>{name}</a> : name}
            </h3>
            <p><b>Date: </b>{date}</p>
            <p><b>Time: </b>{startTime} - {endTime}</p>
            <p><b>Location: </b>{location.join(", ")}</p>
        </div>
    )
}

export default EventsCard;