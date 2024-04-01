import React from 'react';
import { Timestamp } from "firebase/firestore";

interface EventsCardInterface {
    name: string,
    startTime: Timestamp,
    endTime?: Timestamp,
    location?: string[],
    link?: string
}

const EventsCard: React.FC<EventsCardInterface> = ({
    name = "Event Title",
    startTime = Timestamp.fromDate(new Date(0)),
    endTime,
    location,
    link
}) => {
    return (
        <div className="EventCard">
            <div className="EventCardText">
                <p className="EventCardName">{link ? <a href={link}>{name}</a> : name}</p>
                <p><b>Date: </b>{startTime.toDate().toLocaleDateString("en-US", {
                    month:"long",
                    day:"2-digit",
                    year:"numeric"
                })}</p>
                <p><b>Time: </b>{endTime ? startTime.toDate().toLocaleTimeString("en-US", {
                    hour:"numeric",
                    minute:"2-digit"
                }) + " - " + endTime.toDate().toLocaleTimeString("en-US", {
                    hour:"numeric",
                    minute:"2-digit",
                    timeZoneName:"short"
                }) : startTime.toDate().toLocaleTimeString("en-US", {
                    hour:"numeric",
                    minute:"2-digit", 
                    timeZoneName:"short"
                })}</p>
                <p><b>Location: </b>{location ? location.join(", ") : null }</p>
            </div>
        </div>
    )
}

export default EventsCard;