import { Component, OnInit } from '@angular/core';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
// import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css'],
})
export class SeconnecterComponent implements OnInit {
  // form! : FormGroup;
form: any ={
  useName: null,
    password: null
}
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  admin: boolean = false;
  user: any = {};

  faRightToBracket = faRightToBracket;
  faUser = faUser;
  faLock = faLock;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    // private formbuilder: FormBuilder,
  ) {}

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.admin = this.tokenStorage.getUser().admin;
      this.user = this.tokenStorage.getUser();
    }
  }
  onsubmit(): void {
    const { userName, password } = this.form;

    this.authService.login(userName, password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.message.token);
        this.tokenStorage.saveUser(data.messge.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.admin = this.tokenStorage.getUser().user.admin;
        this.user = this.tokenStorage.getUser();
        window.location.reload();
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
