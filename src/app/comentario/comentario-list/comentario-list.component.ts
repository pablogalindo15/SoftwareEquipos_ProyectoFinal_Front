import { Component, OnInit } from '@angular/core';

import { Comentario } from '../comentario';
@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {
  comentarios : Array<Comentario> = [];
  constructor() { }

  ngOnInit() {
  }

}
