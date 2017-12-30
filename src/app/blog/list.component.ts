import { Component, Input } from '@angular/core';

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

    private x;

    constructor(private bloggerService: BloggerService) {
    }

    ngOnInit(): void {
        this.bloggerService.getPosts()
            .subscribe(value => {
                console.log("SUBSCRIPTION!!");
                console.log(value);
            })
    }

    onSubmit() {
        this.taco = "hello";
    }

    test() {
        console.log(this.x);
    }
}