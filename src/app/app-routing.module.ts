import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserGuard } from './guard/user.guard';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent ,canActivate:[UserGuard]  },
  { path: 'login', component:LoginComponent,canActivate:[loginGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
