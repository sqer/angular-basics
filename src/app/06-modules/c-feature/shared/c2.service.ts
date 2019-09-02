import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class C2Service {

  private static instanceCounter: number = 0;

  constructor() {
    C2Service.instanceCounter++;
    console.log(`C2Service created: ${C2Service.instanceCounter}`);
  }

}
