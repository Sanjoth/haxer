import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

//Angular Material 2
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Self Made
import { TruncatePipe } from './truncate/truncate.module';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TruncatePipe,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
     // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


