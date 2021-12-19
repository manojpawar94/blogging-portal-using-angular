import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GoPost } from 'src/app/beans/posts.beans';
import FeaturedPostJson from '../../../assets/blogs/golang-post.json';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {

  goFeaturedPosts : GoPost[] = FeaturedPostJson;

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.goFeaturedPosts = this.goFeaturedPosts.filter(post => post.isFeatured)
  }

  openPost(goPost: GoPost) {
    const navigationExtras: NavigationExtras = {
      state: goPost,
      replaceUrl: true 
    }
    this.router.navigate([`posts/${goPost.id}`], navigationExtras)
  }

}
