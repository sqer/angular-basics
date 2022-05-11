import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: 'main-menu.component.html'
})
export class MainMenuComponent implements OnInit {
  title: string = "Angular workshop";
  defaultLink = {value: '', text: 'Home'};

  ngOnInit() {
  }

}
