import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        FooterComponent,
        LoginComponent,
        HeaderComponent,
        SignupComponent,

    ],
    imports: [
        RouterModule,

        NgIf, MatSidenavModule, MatButtonModule, MatCardModule, MatInputModule, FormsModule, NgFor, MatCheckboxModule, MatFormFieldModule

    ],
    exports: [LoginComponent, SignupComponent, HeaderComponent, FooterComponent]
})


export class coreModule { }
