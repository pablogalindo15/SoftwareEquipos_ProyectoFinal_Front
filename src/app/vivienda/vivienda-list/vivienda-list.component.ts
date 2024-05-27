import { Component, OnInit } from '@angular/core';
import { Vivienda, tipoVivienda, posiblesEstratos } from '../vivienda'; // Import tipoVivienda and posiblesEstratos
import { ViviendaService } from '../vivienda.service';
import { ViviendaDetail } from '../vivienda-detail';

@Component({
  selector: 'app-vivienda-list',
  templateUrl: './vivienda-list.component.html',
  styleUrls: ['./vivienda-list.component.css']
})
export class ViviendaListComponent implements OnInit {

  selectedVivienda!: ViviendaDetail;
  selected: Boolean = false;

  viviendas: Array<ViviendaDetail> = [];
  filteredViviendas: Array<ViviendaDetail> = [];
  tipos = Object.values(tipoVivienda); // Get enum values as array
  estratos = Object.values(posiblesEstratos); // Get enum values as array

  selectedTamano: number = 100; // Initialize with minimum value
  selectedPrecio: number = 0; // Initialize with minimum value
  selectedTipo: tipoVivienda | '' = ''; // Initialize with empty string
  selectedEstrato: posiblesEstratos | '' = ''; // Initialize with empty string

  constructor(private viviendaService: ViviendaService) { }

  getViviendas(): void {
    this.viviendaService.getViviendas().subscribe((viviendas) => {
      this.viviendas = viviendas;
      this.filteredViviendas = viviendas; // Initialize filtered list
    });
  }

  ngOnInit() {
    this.getViviendas();
  }

  onSelected(vivienda: ViviendaDetail): void {
    this.selected = true;
    this.selectedVivienda = vivienda;
  }

  filterViviendas(): void {
    this.filteredViviendas = this.viviendas.filter(vivienda => {
      return (
        (this.selectedTamano ? vivienda.tamano >= this.selectedTamano : true) &&
        (this.selectedPrecio ? vivienda.precio >= this.selectedPrecio : true) &&
        (this.selectedTipo ? vivienda.tipo === this.selectedTipo : true) &&
        (this.selectedEstrato ? vivienda.estrato === this.selectedEstrato : true)
      );
    });
  }

  resetFilters(): void {
    this.selectedTamano = 100;
    this.selectedPrecio = 0;
    this.selectedTipo = '';
    this.selectedEstrato = '';
    this.filteredViviendas = this.viviendas;
  }
}
