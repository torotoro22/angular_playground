import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './posts/post/post.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      component: PostsComponent
    }, {
      path: 'post/:id',
      component: PostDetailsComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
