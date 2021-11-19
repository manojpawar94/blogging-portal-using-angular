import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { AboutComponent } from './main/about/about.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "blogs/:type", component: BlogHomeComponent},
  { path: "posts/:id", component: BlogPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
