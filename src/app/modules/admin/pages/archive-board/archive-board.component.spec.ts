import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveBoardComponent } from './archive-board.component';

describe('ArchiveBoardComponent', () => {
  let component: ArchiveBoardComponent;
  let fixture: ComponentFixture<ArchiveBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveBoardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
