import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { NgModule } from '@angular/core';
import { Firestore, doc, updateDoc, docData, collection, addDoc, setDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate!: Date;
  loading = false;


  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {
  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);

    this.loading = true;

    const docRef = await addDoc(collection(this.firestore, "Users"), this.user.toJSON())
    this.user.id = docRef.id;
    await setDoc(doc(this.firestore, "Users", this.user.id), this.user.toJSON());

    this.loading = false;
    this.dialogRef.close();

  }
}
