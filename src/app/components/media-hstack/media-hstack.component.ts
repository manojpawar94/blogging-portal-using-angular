import { Component, OnInit } from '@angular/core';
import { MediaResource } from 'src/app/beans/media.beans';
import MediaResourceJson from '../../../assets/data/socail_media.json';

@Component({
  selector: 'app-media-hstack',
  templateUrl: './media-hstack.component.html',
  styleUrls: ['./media-hstack.component.css']
})
export class MediaHstackComponent implements OnInit {

  mediaResources: MediaResource[] = MediaResourceJson

  constructor() { }

  ngOnInit(): void {
  }

}
