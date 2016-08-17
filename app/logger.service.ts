import { Injectable } from '@angular/core';

// 服务没有什么特别属于 Angular 的特性。 
// Angular 本身对于服务也没有什么定义。 
// 它甚至都没有定义服务的基类（ Base Class ），也没有地方注册一个服务。
// 在 Angular 2 中，服务只是一个类。 除非我们把它注册进一个 Angular 注入器，否则它没有任何特别之处。
// 我们建议为每个服务类都添加 @Injectable() ，讓服務可以被注入到其他Component

// @Injectable() 标志着一个类可以被一个注入器实例化。
// 通常来讲，在试图实例化一个没有被标识为 @Injectable() 的类时候，注入器将会报告错误。

@Injectable()
export class Logger {
  // 單純的Log Service
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}