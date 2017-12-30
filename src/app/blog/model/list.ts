import { BlogPost } from './post';

export class BlogList {

    public posts: BlogPost[];

    constructor(input: Object) {
        this.posts = new Array();
        
        for (var i = 0; i < input['items'].length; i++) {
            let blogPost: BlogPost = new BlogPost(input['items'][i]);
            this.posts.push(blogPost);
        }
    }
}