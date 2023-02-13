import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Noticia1 } from 'src/app/interface/noticia1.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  url: string = ''
  @Input() nuevaNoticia: Noticia1 = {
    Titulo1: '',
    Imagen1: '',
    texto1: '',
    fecha1: ''
  }
  @Output() oNnuevaNoticia:EventEmitter<Noticia1>= new EventEmitter()

  Agregar() {
    
    //  validaciones chamuzas == esto puede mejorarar 
    // if (this.nuevaNoticia.Titulo1.trim().length === 0) { return alert('Todos los campos son obligarios del formularios') }
    // if (this.nuevaNoticia.texto1.trim().length === 0) { return alert('Todos los campos son obligarios del formularios') }
    // if (this.nuevaNoticia.fecha1.trim().length === 0) { return alert('Todos los campos son obligarios del formularios') }
    
    
    console.log(this.nuevaNoticia);
    this.oNnuevaNoticia.emit(this.nuevaNoticia)


    this.nuevaNoticia = {
      Titulo1: '',
      Imagen1: '',
      texto1: '',
      fecha1: ''

    }
    // validacion si el campo de la img esta vacio

    // if (this.url !== '') {
    //   return (this.url);

    // } else {
    //   alert('EL campo  de la url no puede ser vacio')

    // }

  }

}
