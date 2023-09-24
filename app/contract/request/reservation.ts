module.exports = {
    createRequest: {
        guestName: { type: 'string', required: true },
        contactInfo: { type: 'number', required: true },
        arrivalTime: { type: 'string', required: true, format: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/ },
        tableSize: { type: 'number', required: true, min: 1, max: 100 }
    },
    updateRequest: {
        guestName: { type: 'string', required: false },
        contactInfo: { type: 'number', required: false },
        arrivalTime: { type: 'string', required: false, format: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/ },
        tableSize: { type: 'number', required: false, min: 1, max: 100 },
        status: { type: "string", required: false, enum: ['Pending', 'Confirmed', 'Cancelled'] }
    },
    cancelRequest: {
        id: { type: 'string', required: true },
    },
    showRequest: {
        id: { type: 'string', required: true }
    },
    indexRequest: {
        status: { type: "string", required: false, enum: ['Pending', 'Confirmed', 'Cancelled'] },
        arrivalTime: { type: 'string', required: false, format: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/ }
    }

}
