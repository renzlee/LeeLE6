import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-list-posts',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './list-posts.component.css',
  templateUrl: './list-posts.component.html',
})
export class ListPostsComponent implements OnInit {
  posts?: Post[] = [];
  loaded = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.http.get<Post[]>('http://localhost:5161/api/post')
    .subscribe({
      next: (data: Post[]) => {
        // Newest story first, like the front page of a paper.
        this.posts = [...data].sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
        this.loaded = true;
        console.log(this.posts);
      }
    })
  }

  get lead(): Post | undefined {
    return this.posts?.[0];
  }

  get rest(): Post[] {
    return this.posts?.slice(1) ?? [];
  }
}
