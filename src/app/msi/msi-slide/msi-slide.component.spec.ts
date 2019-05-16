import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsiSlideComponent } from './msi-slide.component';

describe('MsiSlideComponent', () => {
  let component: MsiSlideComponent;
  let fixture: ComponentFixture<MsiSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsiSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsiSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
