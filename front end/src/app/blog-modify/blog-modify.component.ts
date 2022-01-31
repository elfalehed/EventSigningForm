import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../article/article.component";
import { BlogService } from "../service/blog.service";
@Component({
  selector: "app-blog-modify",
  templateUrl: "./blog-modify.component.html",
  styleUrls: ["./blog-modify.component.css"],
})
export class BlogModifyComponent implements OnInit {
  link!: string;
  editorform!: FormGroup;
  blogForm!: FormGroup;
  maxLen: number = 6000;
  htmlContent: string = "";
  blogTitle: string = "";
  editorStyle = {
    height: "300px",
  };

  content: string = "<h1>hello</h1> ";

  post: any;
  blogUrl: any;
  blogCover: any;
  myDate: string;
  onSubmit() {
    this.htmlContent = this.editorform.get("editor")?.value;
    this.blogTitle = this.editorform.get("title")?.value;
    this.blogUrl = this.editorform.get("url")?.value;
    this.blogCover = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.editorform.get("cover")?.value
    );

    const article = {
      id: this.blogUrl,
      title: this.blogTitle,
      feature_image: this.blogCover,
      created_at: this.myDate,
      link: "",
      content: this.htmlContent,
    };
    this.blogService.modifyBlog(article);
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private sanitizer: DomSanitizer,
    private datePipe: DatePipe
  ) {
    this.myDate = this.datePipe.transform(this.myDate, "yyyy-MM-dd")||"";

    this.activatedRoute.params.subscribe((params) => {
      this.link = params["parms"];
      this.content = this.content + this.link;
      console.log(this.content, this.link); // Print the parameter to the console.
    });
  }
  ngOnInit(): void {
    this.post = this.blogService.getBlogById(this.link).subscribe((post) => {
      console.log(post);
    });

    this.editorform = new FormGroup({
      editor: new FormControl(this.post.content),
      title: new FormControl(this.post.title),
      cover: new FormControl(this.post.feature_image),
      url: new FormControl(this.post.id),
    });
    console.log(this.post);
  }
  maxLength(e: any) {
    this.maxLen = this.maxLen - (e.editor.getLength() - 1);
    console.log(e.editor.getLength());
  }
}
