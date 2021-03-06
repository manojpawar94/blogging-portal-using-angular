import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { SocailMediaComponent } from './components/socail-media/socail-media.component';
import { LangIdeComponent } from './components/lang-ide/lang-ide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    BlogHomeComponent,
    BlogPostComponent,
    FeaturedPostComponent,
    SocailMediaComponent,
    LangIdeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule.forRoot({
      loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
