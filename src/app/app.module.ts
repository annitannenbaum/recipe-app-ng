import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CreateRecipeComponent } from './recipe/create-recipe/create-recipe.component';
import { RecipeTagsComponent } from './recipe/recipe-tags/recipe-tags.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipes', component: RecipesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreateRecipeComponent,
    RecipeTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
