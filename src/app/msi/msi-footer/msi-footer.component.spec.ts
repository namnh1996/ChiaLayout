import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsiFooterComponent } from './msi-footer.component';

describe('MsiFooterComponent', () => {
  let component: MsiFooterComponent;
  let fixture: ComponentFixture<MsiFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsiFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
