import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ViviendaService } from '../vivienda.service';
import { Propietario } from '../../propietario/propietario';
import { PropietarioService } from '../../propietario/propietario.service';
import { Vivienda } from '../vivienda';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-vivienda-create',
  templateUrl: './vivienda-create.component.html',
  styleUrls: [],
})

export class ViviendaCreateComponent implements OnInit {

  propietarios!: Propietario[];
  viviendaForm!: FormGroup;

  constructor(
    private viviendaService: ViviendaService,
    private propietarioService: PropietarioService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
  ) {}

  getPropietarios(): void {
    this.propietarioService.getPropietarios().subscribe({
      next: apiData => this.propietarios = apiData,
      error: e => this.toastrService.error(e, 'Error')
    });
  }

  createVivienda(vivienda: Vivienda) {
    if (!this.viviendaForm.valid) return;

    const idAleatorio = faker.number.int();
    vivienda.id = idAleatorio;

    this.viviendaService.createVivienda2(vivienda).subscribe({
      next: apiDataVivienda => {
        this.toastrService.success('La vivienda fue creada exitosamente');
      },
      error: errorVivienda => {
        this.toastrService.error(errorVivienda, 'Error creando la vivienda');
      }
    });
  }

    cancelCreation(): void {
    this.toastrService.warning("La creación de la vivienda fue cancelada", 'Creación cancelada');
    this.viviendaForm.reset();
  }
  
  ngOnInit() {
    this.getPropietarios();
    this.viviendaForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      precio: ['', [Validators.required, Validators.min(0)]],
      descripcion: ['', [Validators.required]],
        fotos: ['', [Validators.required]],
      tamano: ['', [Validators.required, Validators.min(0)]],
      estrato: ['', [Validators.required]],
      restricciones: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      contacto: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      ocupada: ['', [Validators.required]],
      coordX: ['', [Validators.required]],
      coordY: ['', [Validators.required]],
      propietario: ['', [Validators.required]],
      
     });
  }
}
