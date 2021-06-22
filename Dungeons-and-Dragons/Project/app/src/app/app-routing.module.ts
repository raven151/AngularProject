import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
{
path: 'lista',
component: ListaComponent 


},
{
  path: 'form',
  component: FormComponent 
  
  
  },
  {
    path: 'modify',
    component: ModifyComponent
    
    
    },
    {
      path: 'delete',
      component: DeleteComponent
      
      
      }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
