import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MercadolibreProvider } from '../../providers/mercadolibre/mercadolibre'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  searchString:String = ''
  objectList = []
  constructor(public navCtrl: NavController, private mercado:MercadolibreProvider) {

  }
  search():void{
    if(!this.searchString){
      return;
    }
    this.mercado.search(this.searchString)
      .then(response=>{
          this.objectList = response.results
        },error=>{
          console.log('there is an error',error)
          alert('Opps there is an error')
      })
      .catch((err)=>{
        console.log('catch ',err)
        alert('Opps there is an error')        
      })
  }
  ngOnInit():void{
    
  }
}
