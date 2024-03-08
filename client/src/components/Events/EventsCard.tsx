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
            <div className="EventCardText">
                <p className="EventCardName">{name}</p>
                <p><b>Date: </b>{date}</p>
                <p><b>Time: </b>{startTime} - {endTime}</p>
                <p><b>Location: </b>{link ? <a href={link}>{location.join(", ")}</a> : location.join(", ")}</p>
            </div>
        </div>
    )
}

export default EventsCard;