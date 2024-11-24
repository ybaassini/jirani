import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent {
  @Input() post: Post;
}