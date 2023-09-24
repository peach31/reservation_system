// app/graphql/resolver/reservation.ts
import { Service } from 'egg';

export default class ReservationResolver extends Service {
    public async getReservation({ id }: { id: string }) {
        return await this.ctx.model.Reservation.findById(id);
    }

    public async getAllReservations() {
        return await this.ctx.model.Reservation.find();
    }

    public async createReservation({ input }: { input: any }) {
        return await this.ctx.model.Reservation.create(input);
    }

    public async updateReservation({ id, input }: { id: string, input: any }) {
        return await this.ctx.model.Reservation.findByIdAndUpdate(id, input, { new: true });
    }

    public async cancelReservation({ id }: { id: string }) {
        return await this.ctx.model.Reservation.findByIdAndUpdate(id, { status: 'Cancelled' }, { new: true });
    }
}
