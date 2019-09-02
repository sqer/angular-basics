import { Injectable } from '@angular/core';

@Injectable()
export class C1Service {

  private static instanceCounter: number = 0;

  constructor() {
    C1Service.instanceCounter++;
    console.log(`C1Service created: ${C1Service.instanceCounter}`);
  }

}
