import { Component, OnInit, Input } from '@angular/core';
import { FeedItem } from '../../models/feed';

@Component({
  selector: 'app-instagram-item',
  templateUrl: './instagram-item.component.html',
  styleUrls: ['./instagram-item.component.css']
})
export class InstagramItemComponent implements OnInit {

  @Input() instagramItem: FeedItem;

  constructor() { }

  ngOnInit() {
  }

}
