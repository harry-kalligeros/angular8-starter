import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credentials } from '../auth.interfaces';
import { AuthService } from '../auth.service';

@Component({
	selector: 'mw-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	isLoginDisabled = false;

	// tslint:disable-next-line:variable-name
	private _username: string;
	password: string;

	constructor(private authService: AuthService, private storageService: StorageService) {}

	get username() {
		return this._username;
	}

	set username(name: string) {
		console.log('Setting username', name);
		this._username = name;
	}

	ngOnInit() {}

	login() {
		const {username, password} = this;
		const credentials: Credentials = {
			username,
			password
		};
		this.authService.login(credentials)
			.subscribe(jwt => {
				this.storageService.set('token', jwt);
				this.authService.isLoggedIn = true;
			});

	}
}
