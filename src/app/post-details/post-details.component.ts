import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../posts.service';
import {Post} from '../posts/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private postsService: PostsService) {
  }

  posts: Post[] = [];
  post: Post;
  ngOnInit() {
    const id = this.router.snapshot.params.id;
    this.posts = this.postsService.getPosts();
    const post: Post = this.posts.find(item => item.id == id);
    console.log(post);
  }

}
