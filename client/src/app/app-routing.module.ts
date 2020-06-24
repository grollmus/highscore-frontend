import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IndexComponent } from './pages/index/index.component';
import { AuthGuard } from './guards/auth.guard';
import { ArchiveComponent } from './pages/archive/archive.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  { path: 'archive/:id', component: ArchiveComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
