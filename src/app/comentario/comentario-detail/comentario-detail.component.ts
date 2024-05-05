import { Component, OnInit,Input } from '@angular/core';
import { Comentario } from '../comentario';

@Component({
  selector: 'app-comentario-detail',
  templateUrl: './comentario-detail.component.html',
  styleUrls: ['./comentario-detail.component.css']
})
export class ComentarioDetailComponent implements OnInit {
@Input() comentarioDetail!: Comentario;
  constructor() { }

  ngOnInit() {
  }

}
