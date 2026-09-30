import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './register-page.component.css',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null
  }

  constructor(private http: HttpClient,
    private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {
      username, password, firstName, lastName
    } = this.form

    console.log(this.form);

    this.http.post("http://localhost:5161/api/Login/register", this.form, {responseType: 'text'}).subscribe(data => {
      this.route.navigate(['/login'])
    })
  }

}
