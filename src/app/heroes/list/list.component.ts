import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Iron man','Hulk', 'Captain America','She Hulk','Thor', 'Spider-man'];
  public deletedHero?:string;

  removeLastHero():void{
   this.deletedHero =  this.heroNames.pop();
  }

}
