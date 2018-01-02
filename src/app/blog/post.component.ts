import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogPost } from './model/post';
import { BloggerService } from '../services/blogger.service';

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class BlogPostComponent {
    private blogPost: BlogPost;

    constructor(
        private route: ActivatedRoute,
        private bloggerService: BloggerService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.getBlogPost();
    }

    private getBlogPost(): void {
        const id: string = this.route.snapshot.paramMap.get('id');

        this.bloggerService.getPost(id)
            .subscribe(
            result => {
                this.blogPost = new BlogPost(result);
            },
            error => {
                if (error['status'] == '404') {
                    this.router.navigate(['/404']);
                }
            })
    }
}