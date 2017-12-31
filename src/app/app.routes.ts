import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogListComponent } from './blog/list.component';
import { BlogPostComponent } from './blog/post.component';
import { TestComponent } from './test/test-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/test',
        pathMatch: 'full'
    },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogListComponent },
    { path: 'blog/:id', component: BlogPostComponent },
    { path: 'test', component: TestComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
