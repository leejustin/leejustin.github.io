import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogPost } from './model/post';
import { BloggerService } from '../services/blogger.service';
import { PostHelperService } from '../helper/post-helper.service';

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class BlogPostComponent {
    public blogPost: BlogPost;

    constructor(
        private route: ActivatedRoute,
        private bloggerService: BloggerService,
        private postHelperService: PostHelperService,
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

    public getCategory(labels: string[]): string {
        return this.postHelperService.getCategory(labels);
    }
}