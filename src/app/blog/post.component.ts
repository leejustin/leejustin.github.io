import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogPost } from './model/post';
import { BloggerService } from '../services/blogger.service';

@Component({
    selector: 'post',
    templateUrl: './post.component.html'
})

export class BlogPostComponent {
    //private blogPost: BlogPost;

    constructor(
        private route: ActivatedRoute,
        private bloggerService: BloggerService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.getBlogPost();
    }

    private getBlogPost(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        console.log(id);
    }
}