import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AllPlayersComponent } from './pages/all-players/all-players.component';
import { AddPlayersComponent } from './pages/add-players/add-players.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddScoreComponent } from './pages/add-score/add-score.component';

@NgModule({
  declarations: [AdminComponent, AllPlayersComponent, AddPlayersComponent, AddScoreComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule]
})
export class AdminModule {}
