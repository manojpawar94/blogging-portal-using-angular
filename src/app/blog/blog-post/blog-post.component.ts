import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { GoPost } from 'src/app/beans/posts.beans';
import GoPostJson from '../../../assets/blogs/go-post.json';
import { FileReaderService } from 'src/app/services/file-reader.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  goPosts: GoPost[] = GoPostJson;
  markdownData: any = ""
  postId: number = 1

  constructor(private router: Router, private route: ActivatedRoute, private fileReaderService: FileReaderService) {
  }

  ngOnInit() {
    this.postId = this.route.snapshot.params['id'];
    this.loadPost()
  }

  loadPost() {
    this.goPosts.forEach(post => {
      if (post.id == this.postId) {
        this.fileReaderService.fetchContent(post.filepath)
          .subscribe(response => this.markdownData = response)
        return
      }
    })
  }
  openPost(goPost: GoPost) {
    if (this.postId === goPost.id)
      return
    this.postId = goPost.id
    this.loadPost()
    this.router.navigateByUrl(`posts/${this.postId}#post-start`)
  }

}
