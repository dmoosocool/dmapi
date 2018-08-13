import * as Egg from 'egg';
declare module 'egg' {
  export interface namespace{}

  export interface Router {
    namespace(prefix: string, ...middlewares: Function[]): Router;
  }
}