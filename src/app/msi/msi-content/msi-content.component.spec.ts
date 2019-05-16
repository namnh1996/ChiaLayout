import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsiContentComponent } from './msi-content.component';

describe('MsiContentComponent', () => {
  let component: MsiContentComponent;
  let fixture: ComponentFixture<MsiContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsiContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
