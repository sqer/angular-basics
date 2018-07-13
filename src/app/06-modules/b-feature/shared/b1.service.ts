import { Injectable } from '@angular/core';

@Injectable()
export class B1Service {

  private static instanceCounter: number = 0;

  constructor() {
    B1Service.instanceCounter++;
    console.log(`B1Service created: ${B1Service.instanceCounter}`);
  }

}
