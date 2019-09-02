import { Component, OnInit } from '@angular/core';

import { A1Service } from '../../a-feature/shared/a1.service';
import { B1Service } from '../shared/b1.service';
import { AlphaService } from '../../shared/alpha.service';

@Component({
  selector: 'b-first',
  templateUrl: './b-first.component.html'
})
export class BFirstComponent implements OnInit {
  constructor(
    private a1Service: A1Service,
    private b1Service: B1Service,
    private alphaService: AlphaService
  ) {
  }

  ngOnInit() {
  }

}
