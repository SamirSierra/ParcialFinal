import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/shared/controllers/loading/loading.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public image!: FormControl;
  public name!: FormControl;
  public Lastname!: FormControl;
  public Age!: FormControl;
  public Phone!: FormControl;
  public Email!: FormControl;
  public Password!: FormControl;
  public confirmPassword!: FormControl;
  public registerForm!: FormGroup;

  constructor(
    private readonly authSrv: AuthService,
    private readonly Loadingsrv: LoadingService,
    private readonly navCtr: NavController,
    private readonly firebaseService: FirebaseService,
    private readonly alertCtrl: AlertController
  ) {
    this.InitForm();
  }

  private InitForm() {
    this.name = new FormControl('', [Validators.required]);
    this.Lastname = new FormControl('', [Validators.required]);
    this.Age = new FormControl('', [Validators.required]);
    this.Phone = new FormControl('', [
      Validators.required,
      Validators.pattern(/^3\d{9}$/),
    ]);
    this.Email = new FormControl('', [Validators.required, Validators.email]);
    this.Password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.confirmPassword = new FormControl('', Validators.required);
    this.registerForm = new FormGroup(
      {
        name: this.name,
        Lastname: this.Lastname,
        Age: this.Age,
        Phone: this.Phone,
        Email: this.Email,
        Password: this.Password,
        confirmPassword: this.confirmPassword,
      },
      { validators: this.passwordMatchValidator }
    );
  }

  private passwordMatchValidator(
    form: AbstractControl
  ): ValidationErrors | null {
    const password = form.get('Password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  
}