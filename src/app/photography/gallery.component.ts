import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare let jquery: any;
declare let $: any;

@Component({
    selector: 'photography',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class PhotographyComponent {

    private userId: string = '95945723@N06';
    private album: string = '72157652926219293';

    constructor() { }

    public ngAfterViewInit() {

        $("#nanoGallery").nanogallery2({
            thumbnailWidth: 'auto',
            thumbnailHeight: 250,
            userID: this.userId,
            kind: 'flickr',
            photoset: this.album,
            thumbnailAlignment: "center",
            thumbnailBorderVertical: 0,
            thumbnailBorderHorizontal: 0,
            //galleryDisplayMode: "moreButton",
            gallerymaxRows: 10,
            thumbnailLabel: { display: false, position: 'onBottom', align: 'center', displayDescription: 'true' }
        });
    }
}