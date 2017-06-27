import { Injectable } from '@angular/core';

@Injectable()
export class GammaService {

  private static instanceCounter: number = 0;

  constructor() {
    GammaService.instanceCounter++;
    console.log(`GammaService created: ${GammaService.instanceCounter}`);
  }

}
