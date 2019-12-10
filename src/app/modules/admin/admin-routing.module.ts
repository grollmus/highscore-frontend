import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AllPlayersComponent } from './pages/all-players/all-players.component';
import { AddPlayersComponent } from './pages/add-players/add-players.component';
import { AddScoreComponent } from './pages/add-score/add-score.component';
import { ArchiveBoardComponent } from './pages/archive-board/archive-board.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: AllPlayersComponent },
      { path: 'add-players', component: AddPlayersComponent },
      { path: 'add-score', component: AddScoreComponent },
      { path: 'archive-board', component: ArchiveBoardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
