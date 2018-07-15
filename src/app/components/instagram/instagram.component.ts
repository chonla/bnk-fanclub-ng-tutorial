import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { FeedItem } from '../../models/feed';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  feed: FeedItem[];

  constructor(private route: ActivatedRoute, private bnk: BnkService) { }

  ngOnInit() {
    this.bnk.instagram(this.route.snapshot.paramMap.get('instagramId'))
      .subscribe(data => this.feed = data.feeds.filter(i => i.thumbnail.endsWith('.jpg')));
  }

}
