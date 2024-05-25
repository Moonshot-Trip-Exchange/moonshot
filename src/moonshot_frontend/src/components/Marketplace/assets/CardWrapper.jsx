import React from 'react';
import { TicketCard } from '../TicketCard';

export const CardWrapper = ({children}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start', gap: '20px'}}>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
        </div>
    );
}