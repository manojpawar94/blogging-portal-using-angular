import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { GoPost } from 'src/app/beans/posts.beans';
import GoPostJson from '../../../assets/blogs/golang-post.json';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  goPosts: GoPost[] = GoPostJson;
  blogPostType: string = "";

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.blogPostType = this.route.snapshot.params['type'];
  }


  openPost(goPost: GoPost) {
    const navigationExtras: NavigationExtras = {
      state: goPost,
      replaceUrl: true 
    }
    this.router.navigate([`posts/${goPost.id}`], navigationExtras)
  }

}
