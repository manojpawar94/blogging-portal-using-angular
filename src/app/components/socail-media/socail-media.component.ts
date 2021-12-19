import { Component, OnInit } from '@angular/core';
import { MediaResource } from 'src/app/beans/media.beans';
import MediaResourceJson from '../../../assets/data/socail_media.json';

@Component({
  selector: 'app-socail-media',
  templateUrl: './socail-media.component.html',
  styleUrls: ['./socail-media.component.css']
})
export class SocailMediaComponent implements OnInit {

  mediaResources: MediaResource[] = MediaResourceJson
  
  constructor() { }

  ngOnInit(): void {
  }

}
