import { Injectable } from '@angular/core';

@Injectable()

export class PostHelperService {

    private static readonly categories: string[] = ['Finance', 'Technology', 'Photography', 'p-finance', 'p-photography', 'Lifestyle'];

    constructor() { }

    public getCategory(labels: string[]): string {
        if (labels == null || labels.length < 1) {
            return "Uncategorized";
        }
        for (let label of labels) {
            for (let category of PostHelperService.categories) {
                if (label.toUpperCase() === category.toUpperCase()) {
                    return category;
                }
            }
        }
    }
};