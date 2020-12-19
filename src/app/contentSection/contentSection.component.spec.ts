import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsectionComponent } from './contentSection.component';

describe('ContentsectionComponent', () => {
  let component: ContentsectionComponent;
  let fixture: ComponentFixture<ContentsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsectionComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ContentsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
