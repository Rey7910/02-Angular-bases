import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'iron man';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  get getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHeroName():void{
    this.name='Spider-man';
  }

  changeHeroAge():void{
    this.age=25;
  }

  randomMethod():void{
    throw 'Not implemented method'
  }
}
