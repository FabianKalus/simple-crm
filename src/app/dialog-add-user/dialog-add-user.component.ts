import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { NgModule } from '@angular/core';
import { Firestore, doc, updateDoc, docData, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate!: Date;
 

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);
    
    

    let user = new User();
    const coll = collection(this.firestore, 'users');
    addDoc(coll, this.user.toJSON()).then((result: any) => {
      console.log(result);
    });

  }
}
