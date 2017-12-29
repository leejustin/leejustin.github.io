import { Component, Input } from '@angular/core';

@Component({
    selector: 'blog',
    templateUrl: './list.component.html'
})

export class BlogListComponent {
    @Input() showButtons: boolean;
    @Input() sectionTitle: string;
    private taco: string;
    private createDate: Date;

    constructor() {
    }

    onSubmit() {
        this.taco = "hello";
    }
}