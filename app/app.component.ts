import { Component }         from '@angular/core';
import { HeroFormComponent } from './hero-form.component';

@Component({
  selector: 'my-app',
  template: '<hero-form></hero-form>XXX',
  directives: [HeroFormComponent]
  // directives 数组告诉 Angular ，我们的模板依赖于 HeroFormComponent 组件，
  // 它本身也是一个指令 ( 所有组件都是指令 ) 。
})
export class AppComponent { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/