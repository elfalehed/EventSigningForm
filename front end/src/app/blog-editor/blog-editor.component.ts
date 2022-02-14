import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from "@angular/platform-browser";
import { BlogService } from "../service/blog/blog.service";

@Component({
  selector: "app-blog-editor",
  templateUrl: "./blog-editor.component.html",
  styleUrls: ["./blog-editor.component.css"],
  providers: [DatePipe],
})
export class BlogEditorComponent implements OnInit {
  editorform!: FormGroup;
  blogForm!: FormGroup;
  maxLen: number = 6000;
  htmlContent: string = "";
  blogTitle: string = "";
  blogCover: SafeUrl = "";
  blogUrl: string = "";
  editorStyle = {
    height: "300px",
  };
  content: string = "<h1>hello</h1>";
  myDate: string;
  constructor(
    private sanitizer: DomSanitizer,
    private blogService: BlogService,
    private datePipe: DatePipe
  ) {
    this.myDate = this.datePipe.transform(this.myDate, "yyyy-MM-dd");
  }

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
    this.blogService.addBlog(article);
    console.log(this.blogCover);
  }

  ngOnInit(): void {
    this.editorform = new FormGroup({
      editor: new FormControl(null),
      title: new FormControl(null),
      cover: new FormControl(null),
      url: new FormControl(null),
    });
    this.blogForm = new FormGroup({
      description: new FormControl(null),
    });
  }
  maxLength(e: any) {
    this.maxLen = this.maxLen - (e.editor.getLength() - 1);
    console.log(e.editor.getLength());
  }
}
