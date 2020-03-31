import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { InstructionComponent } from './instruction/instruction.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { TermsComponent } from './terms/terms.component';
import { UserRegistrationService } from './user-registration.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    WelcomeComponent,
    InstructionComponent,
    CardGridComponent,
   TermsComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([

      {path:'',redirectTo: '/',pathMatch:'full'},
      {path:'',component:RegisterationComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'submit',component:TermsComponent},
      {path:'game',component:CardGridComponent}
    ])
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
