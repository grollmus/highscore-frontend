import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AllPlayersComponent } from './pages/all-players/all-players.component';
import { AddPlayersComponent } from './pages/add-players/add-players.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: AllPlayersComponent },
      { path: 'add-players', component: AddPlayersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
