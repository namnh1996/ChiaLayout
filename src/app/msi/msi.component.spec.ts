import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsiComponent } from './msi.component';

describe('MsiComponent', () => {
  let component: MsiComponent;
  let fixture: ComponentFixture<MsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
