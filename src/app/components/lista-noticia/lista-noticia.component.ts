import { Component, Input } from '@angular/core';
import { Noticia1 } from 'src/app/interface/noticia1.interface';
import { Noticia2 } from 'src/app/interface/noticia2.interface';

@Component({
  selector: 'app-lista-noticia',
  templateUrl: './lista-noticia.component.html',
  styleUrls: ['./lista-noticia.component.css']
})
export class ListaNoticiaComponent {
  titulo_noticia: string = 'Lista de Noticias'
  Formulario: string = 'Agregar Noticia'
  url_img1: string = '../../../assets/img/blog-thumbnail-1.jpg'
  url_img2: string = '../../../assets/img/blog-thumbnail-2.jpg'
  url: string = ''

  // ejemplo 
  @Input() urle_img1: string = ''
  @Input() urle_img2: string = ''
  @Input() urle_img3: string = ''
  @Input () personaje:any[]=[]
  // @Input() arrayObjeto: any={}
  @Input() arrayNoticia:any=[]
  
  
  constructor() { }
  ngOnInit():void {
    // console.log(this.arrayObjeto);
    // console.log(this.urle_img1,);
    // console.log(this.urle_img2);
  }
  // esta es el formulario
  nuevo: Noticia1 = {
    Titulo1: '',
    Imagen1: '',
    texto1: '',
    fecha1: ''
  }

  noticia1: Noticia1[] = [
    {
      Titulo1: 'Petro Presidente de colombia',
      Imagen1: 'img estatica',
      texto1: `Lorem ipsum dolor sit amet consectetur
              adipisicing elit.Molestias ab odio fuga 
              facilis itaque ullam.`,
      fecha1: '20/02/2022'
    }
  ]
  noticia2: Noticia2[] = [
    {
      Titulo2: 'Covid Arrazando vidas Saludables',
      Imagen2: 'img estatica',
      texto2: `El covid ataca a todos los cuerpos sanos
      pero menos loa indigentes  eso se al parecer el 
      sistema himunologico de estas personas es mas fuertes
      que cual quier otro ser humano  como una 
      especia de resistencia`,
      fecha2: '20/30/2023'
    }
  ]
  // metodo de agregar



}
