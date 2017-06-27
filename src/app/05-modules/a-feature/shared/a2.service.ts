import { Injectable } from '@angular/core';

@Injectable()
export class A2Service {

  private static instanceCounter: number = 0;

  constructor() {
    A2Service.instanceCounter++;
    console.log(`A2Service created: ${A2Service.instanceCounter}`);
  }

}
