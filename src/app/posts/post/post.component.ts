import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../Post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  width = '100px';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateToDetail(id) {
    this.router.navigate(['/post/' + id]);
  }

}
