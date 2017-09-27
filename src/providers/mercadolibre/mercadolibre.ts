import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ErrorHandlerProvider } from '../error-handler/error-handler'
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the MercadolibreProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MercadolibreProvider {
  private url = 'https://api.mercadolibre.com/sites/MCO/search?q='
  constructor(public http: Http, private errorHand:ErrorHandlerProvider) {
  }
  public search(searchString:String):Promise<any>{
     return this.http.get(`${this.url}${searchString}`)
         .toPromise()
         .then(response=>response.json())
         .catch(this.errorHand.error);
  }
}
