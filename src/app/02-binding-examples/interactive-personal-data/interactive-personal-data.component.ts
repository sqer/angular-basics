import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'interactive-personal-data',
  templateUrl: 'interactive-personal-data.component.html'
})
export class InteractivePersonalDataComponent {

  @ViewChild("namediv") namediv;

  person = {
    name: "Tomasz",
    age: 28,
    image: {
      url: "http://braginteractive.com/wp-content/uploads/2015/12/meme-i-have-no-idea-what-i-am-doing.png"
    }
  };

  setName(name:string){
    this.person.name=name;
  }

}
