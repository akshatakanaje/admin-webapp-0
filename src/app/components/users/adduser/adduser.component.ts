import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  
  updation: boolean = false;
  userForm: FormGroup = new FormGroup({});
  

  constructor(private modalService: NgbModal, private fb:FormBuilder, private usersService:UsersService) { }

  ngOnInit(): void {
  }

  initialiseUserModal(userObj: any=null) {
    if(userObj == null) {
    this.updation = false;
    this.userForm = this.fb.group({
    userId: [],           
      username: [null],
      fullName: [null],
      address: [null],
      email: [null],
      img: this.fb.array([]),
      contact: [],
    });
    } else {
      this.updation = true;
      this.userForm = this.fb.group({
      userId: [userObj.userId],           
        username: [userObj.username],
        fullname: [userObj.fullname],
        address: [userObj.address],
        email: [userObj.email],
        img: [userObj.img],
        contact: [userObj.contact],
      })
      }
    } 

}
