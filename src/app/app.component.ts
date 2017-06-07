import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ServiceUsingJWT } from './authservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm : FormGroup;
  constructor(private form :FormBuilder, private authService : ServiceUsingJWT){
    this.loginForm = form.group({
      name: [null,[Validators.required]],
      password: [null,[Validators.required]]
    })
  }

  onSubmit(loginForm){
    this.authService.auth(loginForm.value).subscribe(resData => {
      console.log(resData);
      localStorage.setItem("token", resData.token);
      console.log(localStorage.getItem("token"));
    });
  }

  destroyToken(){
    localStorage.clear();
    console.log(localStorage.getItem("token"));
  }

  showToken(){
    alert(localStorage.getItem("token"));
  }

  randomemsg(){
    this.authService.randome().subscribe(res =>{
      alert(res.msg);
     });
  }

  postUser(){
    this.authService.postUser().subscribe(res =>{
      console.log(res);
    })
  }

}
