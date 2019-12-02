import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AllPlayersComponent } from './all-players.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerService } from '@app/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AllPlayersComponent', () => {
  let component: AllPlayersComponent;
  let fixture: ComponentFixture<AllPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllPlayersComponent],
      providers: [PlayerService],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
