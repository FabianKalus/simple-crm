import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';


describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatDialogModule],
      declarations: [ DialogEditUserComponent],
      providers: [
        {
          provide: Firestore,
          useValue: {}
        },
        {
          provide: MatDialogRef,
          useValue: {}
        },
        
     ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
