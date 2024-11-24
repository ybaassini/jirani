import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-actions',
  templateUrl: './post-actions.component.html',
  styleUrls: ['./post-actions.component.css']
})
export class PostActionsComponent {
  @Input() post: Post;

  onLike() {
    console.log('Like post:', this.post.id);
  }

  onRecommend() {
    console.log('Recommend post:', this.post.id);
  }

  onReply() {
    console.log('Reply to post:', this.post.id);
  }
}