import { NgModule } from "@angular/core";
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { LugarDetailComponent } from './lugar-detail/lugar-detail.component';
import {Routes,RouterModule} from '@angular/router';

const rutas: Routes =[{
    path:'lugares',
    children:[
        {
            path:'list',
            component: LugarListComponent
        },
        {
            path:'id',
            component: LugarDetailComponent
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
  })
  export class LugarRoutingModule { }