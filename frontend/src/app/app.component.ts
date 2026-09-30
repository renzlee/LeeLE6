import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  today = new Date();

  constructor(private tokenStorage: TokenStorageService) { }

  get signedIn(): boolean {
    return !!this.tokenStorage.getToken();
  }

  signOut(): void {
    this.tokenStorage.signOut();
    window.location.href = '/';
  }
}
