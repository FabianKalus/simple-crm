import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user: User = new User();
  loading = false;
  birthDate!: Date;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore) { }

  ngOnInit(): void {
  }


  async saveUser(){
    this.loading = true;
    
    await setDoc(doc(this.firestore, "Users", this.user.id), this.user.toJSON());
    this.loading = false;
    this.dialogRef.close();
  }
}
