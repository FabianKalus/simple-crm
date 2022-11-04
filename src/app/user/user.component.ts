import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();
  users$!: Observable<any>;
  allUsers: any = [];

  constructor( public dialog: MatDialog, private firestore: Firestore) {

  }

  ngOnInit(): void {
    if(this.users$){
    const coll = collection(this.firestore, 'Users');
    this.users$ = collectionData(coll);
    this.users$.subscribe((usersFromServer:any)=>{
      this.allUsers = usersFromServer;
    })}
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
