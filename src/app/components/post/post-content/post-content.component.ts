import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent {
  @Input() post: Post;
}