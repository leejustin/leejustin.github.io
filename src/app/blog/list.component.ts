import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { BlogList } from './model/list';
import { BloggerService } from '../services/blogger.service';

@Component({
    selector: 'blog',
    templateUrl: './list.component.html'
})

export class BlogListComponent {
    private blogList: BlogList;

    constructor(private bloggerService: BloggerService, private router: Router) {
    }

    ngOnInit(): void {
        this.bloggerService.getPosts()
            .subscribe(value => {
                this.blogList = value;
            })
    }
}