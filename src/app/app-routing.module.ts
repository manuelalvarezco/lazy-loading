import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy } from '@angular/router';

const routes: Routes = [
  { path: 'home',
    loadChildren : () => import('./components/home/home.module').then( m => m.HomeModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy : PreloadAllModules  
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }