export class BlogPost {

    public id: string;
    public published: Date;
    public updated: Date;
    public url: string;
    public title: string;
    public content: string;
    public labels: string[];

    constructor(input: Object) {
        this.id = input['id'];
        this.published = new Date(input['published']);
        this.updated = new Date(input['updated']);
        this.url = input['url'];
        this.title = input['title'];
        this.content = input['content'];
        this.labels = input['labels'];
    }
}