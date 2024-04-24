import { Component, OnInit } from '@angular/core';
import { lugar } from '../lugar';
@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrl: './lugar-list.component.css'
})
export class LugarListComponent implements OnInit {
  books: Array<lugar> = [];
  constructor() { }

 ngOnInit() {
 }
}


