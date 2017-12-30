import { Component, Input } from '@angular/core';

import { BlogList } from './model/list';
import { BloggerService } from '../services/blogger.service';

@Component({
    selector: 'blog',
    templateUrl: './list.component.html'
})

export class BlogListComponent {
    @Input() showButtons: boolean;
    @Input() sectionTitle: string;
    private taco: string;
    private createDate: Date;

    private blogList: BlogList;

    constructor(private bloggerService: BloggerService) {
    }

    ngOnInit(): void {
        this.bloggerService.getPosts()
            .subscribe(value => {
                this.blogList = value;
            })
    }

    onSubmit() {
        this.taco = "hello";
    }
    /*
        test() {
            console.log(this.blogList.posts);
        }
    */
}