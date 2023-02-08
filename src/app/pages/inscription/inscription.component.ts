import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
 
  form! : FormGroup;
  //  isSuccesful dira sie le registre s'est déroulée correctement
  isSuccessful = false;
  // isSignupFailed en cas il y-a eu u n probleme lors de l'inscription
  isSignupFailed = false;
  // error stockera le message d'erreur éventuel
  errorMessage ='';

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // const { userName, email, password } = this.form;
    this.form = this.formBuilder.group({
      username: [""],
      email :[""],
      password:[""]
    })
   
    // this.authService.register()
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignupFailed =false;
    //     window.location.href = "seconnecter";
    //   },
  //     err =>{
  //       console.error(err);
  //       this.errorMessage = err.error.message;
  //       this.isSignupFailed =true;
  //     }
  //   )
 }
  onSubmit(){
    const dataForm ={
      username:this.form.controls['username'].value,
      email:this.form.controls['email'].value,
      password:this.form.controls['password'].value
    }
    this.addUser(dataForm.username,dataForm.email,dataForm.password)
  }

  private addUser( username:string, email:string, password:string){
    this.authService.register( username, email, password).subscribe(()=>{
      console.log( username, email, password);
      
    })
  }
}
