import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-alerts';


// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';

//Angular Material 2
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material';

//Self Made
import { TruncatePipe } from './truncate/truncate.module';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RecommenderComponent } from './components/recommender/recommender.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { SeedDataComponent } from './components/seed-data/seed-data.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  { path: 'recom', component: RecommenderComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'newuser', component: SeedDataComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '**', component: PageNotFoundComponent }
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  }*/
  /*
  { path: '',
    redirectTo: '/browse',
    pathMatch: 'full'
  }*/

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
    PageNotFoundComponent,
    AboutUsComponent,
    RecommenderComponent,
    DiscoverComponent,
    SeedDataComponent,
    SettingsComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
      /*,{ enableTracing: true } // <-- debugging purposes only */
    ),
    BrowserModule,
    // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    AlertModule.forRoot({maxMessages: 3, timeout: 4000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


