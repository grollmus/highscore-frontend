import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { HighscoreComponent } from '@app/components/highscore/highscore.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '@app/pages/not-found/not-found.component';
import { IndexComponent } from '@app/pages/index/index.component';
import { AuthService, PlayerService } from '@app/services';
import { AuthInterceptor, ErrorInterceptor } from '@app/interceptors';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchiveComponent } from './pages/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HighscoreComponent,
    NotFoundComponent,
    IndexComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    PlayerService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
