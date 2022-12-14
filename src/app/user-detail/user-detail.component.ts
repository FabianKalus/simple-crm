import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { doc, onSnapshot } from '@firebase/firestore';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: any = '';
  activeUser: User = new User();

  constructor(private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.userId){
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
    })

    onSnapshot(doc(this.firestore, 'Users', this.userId), (doc) => {
      this.activeUser = new User(doc.data());

    });
  }
  }

  editMenu(){
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.activeUser.toJSON());
  }
  
  editUserDetail(){
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.activeUser.toJSON());
  }

}
