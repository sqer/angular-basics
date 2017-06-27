import { Injectable } from '@angular/core';

@Injectable()
export class BetaService {

  private static instanceCounter: number = 0;

  constructor() {
    BetaService.instanceCounter++;
    console.log(`BetaService created: ${BetaService.instanceCounter}`);
  }

}
