import { Injectable } from '@angular/core';

@Injectable()
export class A1Service {

  private static instanceCounter: number = 0;

  constructor() {
    A1Service.instanceCounter++;
    console.log(`A1Service created: ${A1Service.instanceCounter}`);
  }

}
