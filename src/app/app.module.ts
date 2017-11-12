import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LogInComponent},
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'user/:id', component: UserDetailComponent},
  { path: 'about', component: AboutUsComponent},
  { path: '', component: UserComponent}
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  }*/
  /*
  { path: '',
    redirectTo: '/browse',
    pathMatch: 'full'
  }*/,
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TruncatePipe,
    FooterComponent,
    HeaderComponent,
    SignUpComponent,
    LogInComponent,
    MovieDetailComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    AboutUsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
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


