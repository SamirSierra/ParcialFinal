import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './componets/input/input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './componets/button/button.component';
import { LoadingService } from './controllers/loading/loading.service';
import { AuthService } from './services/auth/auth.service';


const Components = [
  InputComponent,
  ButtonComponent
];
const Modules = [CommonModule, IonicModule, FormsModule, ReactiveFormsModule];
const Providers = [AuthService];
const Controllers = [LoadingService];

@NgModule({
  declarations: [...Components],
  imports: [...Modules],
  exports: [...Components, ...Modules],
  providers: [...Providers, ...Controllers],
})
export class SharedModule {}
