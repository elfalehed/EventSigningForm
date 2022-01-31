import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};

interface Post {
  id: string;
  title: string;
  feature_image: string;
  created_at: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = "http://localhost:3000/participant"


  data=[
    {
      id:1,
      title:"just Title",
      body:"<p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
    {
      id:2,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
    {
      id:3,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
    {
      id:4,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
    {
      id:5,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
    {
      id:6,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
    {
      id:7,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
    {
      id:8,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
    {
      id:9,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
    {
      id:10,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
    {
      id:11,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:'C:\fakepath\icon-1968240_960_720.png'
    },
    {
      id:12,
      title:"just Title",
      body:"<p>Hello</p>",
      cover:"C:\fakepath\icon-1968240_960_720.png"
    },
  ]

addBlog(blog:any):Observable<any>{
    const apiUrl = "http://localhost:3000/"
   console.log(blog)
   return this.http.post<any>(this.apiUrl,blog)
}

getBlogById(id:any):Observable<Post>{
  console.log(id)
 return this.http.get<Post>(`${this.apiUrl}/${id}`);

  
}

getBlogByUrl(url:Post){
  // return this.http.get<any[]>(`${this.apiUrl}/${url}`);
  return this.data[1]
}

  getBlog(){

    // return this.http.get<any[]>(${this.apiUrl});
    return this.data
  }
  constructor(private http: HttpClient) { 

  }

  deleteBlog(user:Post):Observable<Post>{
    const url=`${this.apiUrl}/${user.id}`
    return this.http.delete<Post>(url)
  }

  modifyBlog(post:Post):Observable<Post>{
    console.log("task",post)
    // const body = { title: 'Angular PUT Request Example' };
    const url=`${this.apiUrl}/${post.id}`
    return this.http.put<Post>(url,post)
        
  }
}


