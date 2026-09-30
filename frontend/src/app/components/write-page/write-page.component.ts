import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-write-page',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './write-page.component.css',
  templateUrl: './write-page.component.html',
})
export class WritePageComponent {
  form: any = {
    title: null,
    body: null
  }
  error = '';

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  get signedIn(): boolean {
    return !!this.tokenStorage.getToken();
  }

  onSubmit(): void {
    this.error = '';
    // POST /api/post/add needs the token from the login (Authorization: Bearer <token>).
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.tokenStorage.getToken() });
    this.http.post("http://localhost:5161/api/post/add", this.form, { headers, responseType: 'text' }).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => this.error = 'The story could not be filed. Your sign-in may have expired; please sign in again.'
    })
  }
}
