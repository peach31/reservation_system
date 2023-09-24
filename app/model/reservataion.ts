// app/model/reservation.ts

import { Application } from 'egg';

export default (app: Application) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ReservationSchema = new Schema({
        guestName: String,
        contactInfo: String,
        arrivalTime: Date,
        tableSize: Number,
        status: {
            type: String,
            enum: ['Pending', 'Confirmed', 'Cancelled'], // Define the possible status values
            default: 'Pending', // Set the default status
        },
    });

    return mongoose.model('Reservation', ReservationSchema);
};