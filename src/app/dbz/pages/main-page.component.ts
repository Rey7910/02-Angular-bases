import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters:Character[]=[{
    name:'Krillin',
    power: 200,
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegetta',
    power: 7500,
  }];


  onNewCharacter(character: Character):void{
    //console.log("Main page: ",{character});
    // console.log(this.characters);

    this.characters.push(character);
  }

  deleteCharacter(id: number):void{
    this.characters.splice(id,1);
  }
}
