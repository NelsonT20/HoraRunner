import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * @author Nelson Torres <github: github.com/NelsonT20> <email:nelsondaniel88@gmail.com>
 * @license <Nelson Torres>
 * @description 
 * Resultado de la aplicacion
 * 
 */

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class Result {

  public valor1 : any;
  public valor2 : any;
  public valor3 : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    let h = this.navParams.get('primero');
    let m = this.navParams.get('segundo');
    let s = this.navParams.get('tercero');

    console.log('ionViewDidLoad Result');
    if(s < 59){
        s++;
        this.valor1 = h;
        this.valor2 = m;
        this.valor3 = s;
    }else if ((m < 59) && (s == 59)) {
      m++;
      s = 0;
        this.valor1 = h;
        this.valor2 = m;
        this.valor3 = s;

    }else if((m == 59) && (s==59)){
        h++;
        m = 0;
        s = 0;
        if(h == 24){
          h= 0;
          m = 0;
          s = 0;
          this.valor1 = h;
          this.valor2 = m;
          this.valor3 = s;
        }
        this.valor1 = h;
        this.valor2 = m;
        this.valor3 = s;
    }else if ((h == 23) && (m ==59) && (s == 59)) {
          h = 0;
          m = 0;
          s = 0;
          this.valor1 = h;
          this.valor2 = m;
          this.valor3 = s;
        }

  }


  goBack(){
    this.navCtrl.pop();
  }

}
