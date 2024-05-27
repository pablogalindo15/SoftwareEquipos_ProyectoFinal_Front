import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PropietarioService } from '../propietario.service';
import { PropietarioDetail } from '../propietario-detail'; // Importar PropietarioDetail
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-create-propietario',
  templateUrl: './createPropietario.component.html',
  styleUrls: ['./createPropietario.component.css'],
})
export class CreatePropietarioComponent implements OnInit {

  @Output() propietarioCreado = new EventEmitter<PropietarioDetail>();

  propietarioForm!: FormGroup;

  constructor(
    private propietarioService: PropietarioService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
  ) {}

  createPropietario() {
    if (!this.propietarioForm.valid) return;

    const nuevoPropietario: PropietarioDetail = new PropietarioDetail(
      faker.number.int(),
      this.propietarioForm.value.foto,
      this.propietarioForm.value.nombre,
      this.propietarioForm.value.celular,
      this.propietarioForm.value.correo,
      [] // Inicializar con una lista vacía de viviendas
    );

    this.propietarioService.createPropietario(nuevoPropietario).subscribe({
      next: (propietario) => {
        this.toastrService.success('El propietario fue creado exitosamente');
        this.propietarioCreado.emit(propietario);
        this.propietarioForm.reset();
      },
      error: (error) => {
        // Mostrar el mensaje de error detallado
        const errorMessage = error.error ? error.error.message : error.message;
        this.toastrService.error(errorMessage, 'Error creando el propietario');
      }
    });
  }

  cancelCreation(): void {
    this.toastrService.warning("La creación del propietario fue cancelada", 'Creación cancelada');
    this.propietarioForm.reset();
  }

  ngOnInit() {
    this.propietarioForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      foto: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      correo: ['', [Validators.required, Validators.email]],
    });
  }
}
