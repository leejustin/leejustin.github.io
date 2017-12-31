import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogListComponent } from './blog/list.component';
import { BlogPostComponent } from './blog/post.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/blog',
        pathMatch: 'full'
    },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogListComponent },
    { path: 'blog/:id', component: BlogPostComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
