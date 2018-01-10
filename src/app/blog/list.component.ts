import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { BlogList } from './model/list';
import { BloggerService } from '../services/blogger.service';

@Component({
    selector: 'blog',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class BlogListComponent {
    public blogList: BlogList;

    constructor(private bloggerService: BloggerService, private router: Router) {
    }

    ngOnInit(): void {
        this.getBlogList();
    }

    private getBlogList() {
        this.bloggerService.getPosts()
            .subscribe(result => {
                this.blogList = result;
            })
    }

    private loadPost(id: string) {
        var routePath: string = '/blog';

        if (id != "" && id != null) {
            routePath = '/blog/' + id;
        }
        this.router.navigate([routePath]);
    }
}