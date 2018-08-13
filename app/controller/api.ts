import { Controller } from 'egg';

export default class ApiController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = 'hello api';
  }

  public async test() {
    const { ctx } = this;
    ctx.body = 'hello api.test';
  }
}
