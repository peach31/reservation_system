import { Controller } from 'egg';
import { checkParams } from '../utils/utils';
/**
 * @Controller Reservation
 */
export default class ReservationController extends Controller {
  // Create a reservation
  /**
   * @summary create reservation
   * @description guest create reservation
   * @router post /api/reservations
   * @request body createRequest *body
   */
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    if (checkParams(ctx, ctx.rule.createRequest, data)) return;

    data.status = 'Pending';
    const result = await ctx.app.mongoose.model('Reservation').create(data);

    ctx.body = { code: 200, data: { id: result?._id } };
  }

  // Update a reservation
  /**
   * @summary update reservation
   * @description guest update reservation
   * @router put /api/reservations/{id}
   * @request path string *id
   * @request body updateRequest *body
   */
  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    const data = ctx.request.body;
    console.log(id);
    if (checkParams(ctx, ctx.rule.updateRequest, Object.assign(data))) return;
    const reservation = await ctx.app.mongoose.model('Reservation').findByIdAndUpdate(id, data, {
      new: true,
    });
    ctx.body = reservation;
  }

  // Cancel a reservation
  /**
   * @summary cancel reservation
   * @description guest cancel reservation
   * @router put /api/reservations/{id}/cancel
   * @request path string *id 
   */
  async cancel() {
    const { ctx } = this;
    const id = ctx.params.id;

    // 将字符串表示的 _id 转换为 ObjectId 对象
    console.log(id);
    if (checkParams(ctx, ctx.rule.cancelRequest, { id })) return;
    console.log(id);
    const reservation = await ctx.app.mongoose.model('Reservation').findByIdAndUpdate(
      id,
      { status: 'Cancelled' },
      {
        new: true,
      }
    );
    ctx.body = reservation;
  }

  // Get all reservations by date and status
  /**
 * @summary get reservations
 * @description guest get reservations
 * @router get /api/reservations
 * @request query string status
 * @request query string arrivalTime
 */
  async index() {
    const { ctx } = this;
    const { date, status } = ctx.query;
    const query: Record<string, any> = {};

    if (date) {
      query.arrivalTime = { $gte: new Date(date) };
    }

    if (status) {
      query.status = status;
    }

    const reservations = await ctx.app.mongoose.model('Reservation').find(query);
    ctx.body = reservations;
  }

  // Get a reservation by ID
  /**
  * @summary get reservation by id
  * @description guest get reservation
  * @router get /api/reservations/{id}
  * @request path string *id 
  */
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    if (checkParams(ctx, ctx.rule.showRequest, { id })) return;
    const reservation = await ctx.app.mongoose.model('Reservation').findById(id);
    ctx.body = reservation;
  }
}