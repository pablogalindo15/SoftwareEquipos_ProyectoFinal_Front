import { NgModule } from "@angular/core";
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';
import {Routes,RouterModule} from '@angular/router';

const rutas: Routes =[{
    path:'servicios',
    children:[
        {
            path:'list',
            component: ServicioListComponent
        },
        {
            path:':id',
            component: ServicioDetailComponent
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
  })
  export class ServicioRoutingModule { }