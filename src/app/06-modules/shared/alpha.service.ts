import { Injectable } from '@angular/core';

@Injectable()
export class AlphaService {

  private static instanceCounter: number = 0;

  constructor() {
    AlphaService.instanceCounter++;
    console.log(`AlphaService created: ${AlphaService.instanceCounter}`);
  }

}
