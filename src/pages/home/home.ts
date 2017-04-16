import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Result }    from '../result/result'


/**
 * @author Nelson Torres <github: github.com/NelsonT20> <email:nelsondaniel88@gmail.com>
 * @license <Nelson Torres>
 * @description 
 * Inicio de la aplicacion
 * 
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public valor1 : any;
  public valor2 : any;
  public valor3 : any;


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLeave(){
    this.valor1 = '';
    this.valor2 = '';
    this.valor3 = '';
  }

   Calcular(){
  
    let h: any;
    let m: any;
    let s: any;
   
    h = this.valor1;
    m = this.valor2;
    s = this.valor3;


     let data = {
       'primero': h,
       'segundo': m,
       'tercero': s
     }

    this.navCtrl.push(Result,data);
  }

}

