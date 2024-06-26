import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output("OutputDeleteCharacter")
  public deleteCharacter: EventEmitter<string> = new EventEmitter();



  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];


  emitId(index: string):void{

    console.log({index})

    this.deleteCharacter.emit(index);

  }
}
