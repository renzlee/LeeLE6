import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login-page',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login-page.component.css',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  }

  error = '';

  constructor(
    private authService: AuthServiceService,
    private tokenStorage: TokenStorageService,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.authService.isLoggedIn = true;
      this.router.navigate([this.authService.redirectUrl]);
    }
  }

  onSubmit() {
    const {username, password} = this.form;

    this.error = '';
    this.http.post<LoginPostData>("http://localhost:5161/api/Login/login", { username, password }).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.id_token);
        this.tokenStorage.saveUser(data.id);
        this.router.navigate([this.authService.redirectUrl]);
        window.location.reload();
      },
      error: () => this.error = 'That username and password were not found. Please check them and try again.'
    })
  }

}

export interface LoginPostData {
  id_token: string;
  id: number;
}
