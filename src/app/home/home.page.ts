import { Component } from '@angular/core';
import { CapacitorFlash } from '@capgo/capacitor-flash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public active: boolean;

  constructor() {
    this.active = false;
  }

  flash(){
    this.active = !this.active;

    // el siguiente codigo se puede sustituir por CapacitorFlash.toggle()

    if(this.active){
      // Encendemos la linterna
      CapacitorFlash.switchOn({ intensity: 100 });
    }else{
      // Apagamos la linterna
      CapacitorFlash.switchOff();
    }
  }

}
