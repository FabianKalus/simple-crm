import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAddressComponent } from './dialog-edit-address.component';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';



describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
         MatDialogModule, 
      ],
      declarations: [ DialogEditAddressComponent ],
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

    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
