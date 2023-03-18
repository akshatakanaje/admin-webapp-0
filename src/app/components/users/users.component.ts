import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  public usersList:any[] =[];     //userList is from users.components
       //we used the users.service as a dependency injection and added into the user.component
  public userInfo:any;     

  constructor(private userService: UsersService, private modalService: NgbModal) { }  //here we are going access all data from the userService

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response:any) => {  //response is nothing but user data
     //console.log("Get all users data");
     //console.log(response); 
     this.usersList = response;   
    });
  }
  
  openModal(modelRef:any, userObj = null) {
    this.modalService.open(modelRef, { size: "xl" });
    this.userInfo = userObj;
  }

  openViewModal(modelRef:any, userObj = null) {
    this.modalService.open(modelRef, { size: "l" });
    this.userInfo = userObj;
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }


}
