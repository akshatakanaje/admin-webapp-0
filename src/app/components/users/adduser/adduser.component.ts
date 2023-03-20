import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  userBool: boolean = true;
  loader : boolean = false;

  @Input()
  public userInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal, private fb:FormBuilder, private usersService:UsersService) { }

  ngOnInit(): void {
    if(this.userInfo) {
      this.initialForm(this.userInfo);
    } else{
      this.initialForm();
    }
  }

  initialForm(userObj: any = null) {
    if (userObj === null) {
      this.userForm = this.fb.group({
        fullName: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        userId: [null],
        city: [null],
        state: [null],
        active: [true],
        addedOn: [],
        contact: [],
      });
    } else {
      this.userForm = this.fb.group({
        fullName: [userObj.fullName, Validators.required],
        email: [userObj.email, Validators.required],
        password: [userObj.password, Validators.required],
        userId: [userObj.userId],
        active: [userObj.active],
        city: [userObj.city],
        state: [userObj.state],
        contact: [userObj.contact],
      });
    }
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

    close() {
      this.closeModel.emit();
    }

}
