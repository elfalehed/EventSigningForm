import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import {BlogService} from "../service/blog.service"

interface Article {
  title: string;
  content: string;
  feature_image: string;
  tags: string[];
  created_at: string;
}

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class ArticleComponent implements OnInit {
  postId!: number;
  postLinkId!: String;
  postList: Post[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private blogService:BlogService
  ) {}
post:any
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postLinkId = params.get("id")||"";

    });

    this.post=this.blogService.getBlogById(this.postLinkId).subscribe(post=>{
      console.log(post)
    })

  }
}

export interface Post {
  id: number;
  title: string;
  feature_image: string;
  created_at: string;
  link: string;
  content: string;
}
