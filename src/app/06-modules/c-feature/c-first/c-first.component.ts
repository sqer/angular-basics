import { Component, OnInit } from '@angular/core';

import { C1Service } from '../shared/c1.service';

@Component({
  selector: 'c-first',
  templateUrl: './c-first.component.html'
})
export class CFirstComponent implements OnInit {
  constructor(
    private c1Service: C1Service
    //    private c2Service: C2Service
  ) {
  }

  ngOnInit() {
  }

}
