import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayersComponent } from './add-players.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerService } from '@app/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddPlayerComponent', () => {
  let component: AddPlayersComponent;
  let fixture: ComponentFixture<AddPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlayersComponent],
      providers: [PlayerService],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
