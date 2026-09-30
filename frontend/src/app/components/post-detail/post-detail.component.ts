import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './post-detail.component.css',
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {
  private routeSub: Subscription = new Subscription();
  private id: number = 0;

  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.initData();
  }

  initData(): void {
    this.http.get<Post>("http://localhost:5161/api/post/" + this.id).subscribe({
      next: (data: Post) => {
        this.post = data;
        console.log(this.post);
      }
    })
  }
}
