import { Component, OnInit } from '@angular/core';

import { A1Service } from '../shared/a1.service';
import { B1Service } from '../../b-feature/shared/b1.service';
import { AlphaService } from '../../shared/alpha.service';

@Component({
  selector: 'a-first',
  templateUrl: './a-first.component.html'
})
export class AFirstComponent implements OnInit {
  constructor(
    private a1Service: A1Service,
    private b1Service: B1Service,
    private alphaService: AlphaService
  ) {
  }

  ngOnInit() {
  }

}
