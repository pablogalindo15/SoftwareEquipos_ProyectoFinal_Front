import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../comentario.service';
import { ComentarioDetail } from '../comentario-detail';


import { Comentario } from '../comentario';
@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {

  comentarios : Array<Comentario> = [];
  selected :Boolean = false;
  selectedComentario!: ComentarioDetail;

  constructor(private comentarioService:ComentarioService) { }
  getComentarios(): void{
    this.comentarioService.getComentarios().subscribe((comentarios)=>{
      this.comentarios = comentarios;

    });
  }
  ngOnInit() {
    this.getComentarios();
  }
  onSelected(comentario: ComentarioDetail): void {
    this.selected = true;
    this.selectedComentario = comentario;
  }

}
