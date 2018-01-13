import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { BlogList } from './model/list';
import { BloggerService } from '../services/blogger.service';
import { GcloudService } from '../services/gcloud.service';
import { PostHelperService } from '../helper/post-helper.service';

@Component({
    selector: 'blog',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class BlogListComponent {
    public blogList: BlogList;

    constructor(
        private bloggerService: BloggerService,
        private postHelperService: PostHelperService,
        private gcloudService: GcloudService,
        private router: Router) { }

    ngOnInit(): void {
        this.getBlogList();
    }

    private getBlogList() {
        this.bloggerService.getPosts()
            .subscribe(result => {
                this.blogList = result;
            })
    }

    private getThumbnail(id: string): string {
        return this.gcloudService.getPostThumbnail(id, "2018");
    }

    private getCategory(labels: string[]): string {
        return this.postHelperService.getCategory(labels);
    }

    private loadPost(id: string) {
        var routePath: string = '/blog';

        if (id != "" && id != null) {
            routePath = '/blog/' + id;
        }
        this.router.navigate([routePath]);
    }
}

