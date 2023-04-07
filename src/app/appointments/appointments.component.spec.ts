import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxListModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDialogModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule } from '@infragistics/igniteui-angular';
import { AppointmentsComponent } from './appointments.component';

describe('AppointmentsComponent', () => {
  let component: AppointmentsComponent;
  let fixture: ComponentFixture<AppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDialogModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
