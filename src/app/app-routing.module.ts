import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page/home',
    pathMatch: 'full'
  },
  {
    path: 'page',
    loadChildren: () => import('./@pages/pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./@pages/access/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
