import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{ path: 'login', component: LoginComponent, ...canActivate(redirectUnauthorizedToLogin) },
	{ path: 'loginout', component: LogoutComponent },
	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	providers: [],
	exports: [RouterModule],
})
export class UserRoutingModule { }
