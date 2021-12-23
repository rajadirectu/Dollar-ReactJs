import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLicenseSetupComponent } from './store-license-setup.component';

describe('StoreLicenseSetupComponent', () => {
  let component: StoreLicenseSetupComponent;
  let fixture: ComponentFixture<StoreLicenseSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreLicenseSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLicenseSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
