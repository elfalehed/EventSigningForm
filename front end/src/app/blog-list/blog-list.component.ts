import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {BlogService} from "../service/blog/blog.service"

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'preview', 'modify',"delete"];
  dataSource: MatTableDataSource<UserData>;

  ArticalsList:any[]=[]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private blogService:BlogService) {
   
  }
  ngOnInit(): void {
   console.log(this.blogService.getBlog());
   this.ArticalsList= this.blogService.getBlog()
   this.dataSource = new MatTableDataSource(this.ArticalsList);
   console.log(this.ArticalsList);
    throw new Error('Method not implemented.');
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(post:any){
    this.blogService.deleteBlog(post).subscribe(()=>{
      this.ArticalsList=this.ArticalsList.filter((t)=>t.id!=post.id)
      this.dataSource = new MatTableDataSource(this.ArticalsList);
    }
    )
  }
}



