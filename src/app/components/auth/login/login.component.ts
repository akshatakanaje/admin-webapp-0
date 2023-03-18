import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signinForm:FormGroup;    //created RactiveForm as a FormGroup
  public errResponse:string ="";

  constructor(private authService: AuthService, private router: Router) { 
    this.signinForm = new FormGroup({    //initializing the FormGroup with email and password
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.email])
    });
  } 

  ngOnInit(): void {
  }
  //Cross-Origin Resource Sharing (CORS): it is an HTTP header based mechanism that allow a server to 
  //indicate any origin i.e any domain, port number etc other than its own form, its time to accessa data
  //across external resources that time we will get CORS.
 
  onSubmit() {
    if(this.signinForm.valid) {
      this.authService.adminLogin(this.signinForm.getRawValue()).subscribe((response:any)=>{
        if(response.status ==="Success") {
          localStorage.setItem('user', response.data);
          localStorage.setItem('status', 'loggedIn');
          this.router.navigateByUrl('/products');
        }
      },error =>{
        this.errResponse = error.error.message;
      })
    } else{
      this.errResponse = "Enable to submit form, Invalid form data";
      console.log("Invalid Form");
    }
  }
}
