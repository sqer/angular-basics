import { Injectable } from '@angular/core';

@Injectable()
export class B2Service {

  private static instanceCounter: number = 0;

  constructor() {
    B2Service.instanceCounter++;
    console.log(`B2Service created: ${B2Service.instanceCounter}`);
  }

}
