import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule],
  exports: [ButtonComponent, InputComponent],
})
export class UiModule {}
