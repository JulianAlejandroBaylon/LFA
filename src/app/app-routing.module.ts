import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

// Define tus rutas
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', component: AppComponent },
  { path: '', component: NavbarComponent },
  { path: '', component: MarketplaceComponent }
  
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
