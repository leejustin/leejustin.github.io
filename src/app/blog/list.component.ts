import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { BlogList } from './model/list';
import { BloggerService } from '../services/blogger.service';
import { GcloudService } from '../services/gcloud.service';

@Component({
    selector: 'blog',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class BlogListComponent {
    public blogList: BlogList;
    public gcloudService: GcloudService;

    //TODO: store these values in a global class
    private static readonly categories: string[] = ['Finance', 'Technology', 'Photography', 'p-finance', 'p-photography', 'Lifestyle'];

    constructor(private bloggerService: BloggerService, private router: Router) {
        this.gcloudService = new GcloudService();
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

    private getThumbnail(id: string): string {
        return this.gcloudService.getPostThumbnail(id, "2018");
    }

    //TODO: look into creating a helper class for this
    private getCategory(labels: string[]): string {
        if (labels == null || labels.length < 1) {
            return "Uncategorized";
        }
        for (let label of labels) {
            for (let category of BlogListComponent.categories) {
                if (label.toUpperCase() === category.toUpperCase()) {
                    return category;
                }
            }
        }
    }

    private loadPost(id: string) {
        var routePath: string = '/blog';

        if (id != "" && id != null) {
            routePath = '/blog/' + id;
        }
        this.router.navigate([routePath]);
    }
}