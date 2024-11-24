import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post: Post;

  constructor(private routerExtensions: RouterExtensions) {}

  onLike() {
    console.log('Like post:', this.post.id);
  }

  onShare() {
    console.log('Share post:', this.post.id);
  }

  onReply() {
    console.log('Reply to post:', this.post.id);
    this.navigateTo(`/chat/${this.post.id}`);
  }

  goTo(id: string) {
    this.navigateTo(`/request/${id}`);
  }

  navigateTo(route: string) {
    this.routerExtensions.navigate([route], {
      transition: { name: 'fade' },
    });
  }
}
