import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../entities/post'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  //@Input() titlePost: String;
  @Input() posts: Post;
  constructor() { }

  ngOnInit() {
  }
  onAddLove() {
    this.posts.loveIts = this.posts.loveIts + 1;
  }
  onAddDontLove() {
    this.posts.loveIts = this.posts.loveIts - 1;
  }
}
