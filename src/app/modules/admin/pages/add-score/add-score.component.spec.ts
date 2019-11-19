import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScoreComponent } from './add-score.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerService } from '@app/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddScoreComponent', () => {
  let component: AddScoreComponent;
  let fixture: ComponentFixture<AddScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddScoreComponent],
      providers: [PlayerService],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
