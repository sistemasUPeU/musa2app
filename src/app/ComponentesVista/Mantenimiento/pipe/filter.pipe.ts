import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let resultAcciones = [];
    for(let request of value){
      if (request.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultAcciones.push(request);
      }
    }
    return resultAcciones;
  }

}
