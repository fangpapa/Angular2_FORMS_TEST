import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Logger } from './logger.service';

// Service可以再被Service使用

@Injectable()
export class HeroService {
  private heroes: Hero[] = [];

  constructor(private logger: Logger) { }

  getHeroes() {
    this.logger.log(`Fetched ${this.heroes.length} heroes.`);
    return this.heroes;
  }
}