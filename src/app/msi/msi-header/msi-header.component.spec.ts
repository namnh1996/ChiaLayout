import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsiHeaderComponent } from './msi-header.component';

describe('MsiHeaderComponent', () => {
  let component: MsiHeaderComponent;
  let fixture: ComponentFixture<MsiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
