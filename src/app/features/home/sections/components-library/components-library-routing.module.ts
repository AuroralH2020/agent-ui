import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsLibraryComponent } from './components-library.component';

const routes: Routes = [{
  path: '',
  component: ComponentsLibraryComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsLibraryRoutingModule { }
