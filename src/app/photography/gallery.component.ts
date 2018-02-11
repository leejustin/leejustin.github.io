import { Component } from '@angular/core';
import { Gallery, GalleryItem } from 'ng-gallery';

@Component({
    selector: 'photography',
    templateUrl: './gallery.component.html'
    //styleUrls: ['../blog/post.component.css']
})

export class PhotographyComponent {

    public images: GalleryItem[] = [
        {
            src: 'assets/lucky.jpg',
            thumbnail: 'assets/lucky.jpg'
        },
        {
            src: 'assets/profile.jpg',
            thumbnail: 'assets/profile.jpg'
        },
        {
            src: 'assets/lucky.jpg',
            thumbnail: 'assets/lucky.jpg'
        },
        {
            src: 'assets/profile.jpg',
            thumbnail: 'assets/profile.jpg'
        },
        {
            src: 'assets/lucky.jpg',
            thumbnail: 'assets/lucky.jpg'
        },
        {
            src: 'assets/profile.jpg',
            thumbnail: 'assets/profile.jpg'
        },
        {
            src: 'assets/lucky.jpg',
            thumbnail: 'assets/lucky.jpg'
        },
        {
            src: 'assets/profile.jpg',
            thumbnail: 'assets/profile.jpg'
        }
    ];

    constructor(public gallery: Gallery) {}

    ngOnInit(): void {
        console.log("hi");
        setTimeout(() => {
            
            console.log("hi again");
            this.gallery.load(this.images);
        }, 1500);
    }
}