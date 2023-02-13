import { Component } from '@angular/core';
import { Noticia1 } from '../interface/noticia1.interface';
import { Personaje } from '../interface/Personaje.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  urle_img1: string = '../../../assets/img/blog-thumbnail-1.jpg'
  urle_img2: string = '../../../assets/img/blog-thumbnail-2.jpg'
  urle_img3: string = '../../../assets/img/blog-thumbnail-3.jpg'
  arrayNoticia: Noticia1[] = [
    {
      Titulo1: 'Petro se lanza a la precidencia',
      texto1: `De esta manera, el candidato de la coalición progresista Pacto Histórico
     se convierte en el primer presidente electo de ideología 
     de izquierda en Colombia. Nunca antes el país andino, 
     desde su proclamación como república independiente 
     en 1810, ha gobernado la izquierda a escala nacional.
      Hasta ahora.`,
      fecha1: '19/12/2022'
    }]
  nuevo: Noticia1 = {
    Titulo1: '',
    Imagen1: '',
    texto1: '',
    fecha1: ''


  }
  agregarNuevaNoticia(arg:Noticia1){
    console.log('main-blog');
    console.log(arg);
    // hasta aqui llego
    this.arrayNoticia.push(arg)
    

  }
}
