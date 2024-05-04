import React, { useEffect, useState } from "react";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../../firebase.js";

import "./Events.css";
import EventsCard from "./EventsCard.tsx";

const Events: React.FC = () => {
    const [events, setEvents] = useState<DocumentData[]>();

    // TODO: Add pagination by month & sorting
    const fetchCollection = async (name) => {
        const queryDocs = await getDocs(collection(db, name));
        const queryData = queryDocs.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setEvents(queryData);
    }

    useEffect(() => {
        try {
            fetchCollection("events");
        } catch(e) {
            console.log(e);
        }
    }, []);

    window.scrollTo(0,0);
    return (
        <>
            <h1 className="EventsTitle">EVENTS</h1>
            <div className="EventsList">
                {events ? (
                    events.map((event, index) => (
                        <EventsCard 
                            key={index}
                            name={event.name}
                            startTime={event.startTime}
                            endTime={event.endTime}
                            location={event.location}
                            link={event.link}
                        />
                    ))
                ) : (
                    // TODO: Add spinner
                    <p>Loading Events...</p>
                )}
            </div>
        </>
    )
}

export default Events;