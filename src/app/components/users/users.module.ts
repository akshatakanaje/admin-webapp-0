import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { ListusersComponent } from './listusers/listusers.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UsersService } from 'src/app/services/users.service';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [
    UsersComponent,
    AdduserComponent,
    ListusersComponent,
    ViewuserComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [UsersService]  //services are need to be added to the module files
})
export class UsersModule { }
