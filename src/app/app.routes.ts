import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogListComponent } from './blog/list.component';
import { BlogPostComponent } from './blog/post.component';
import { NotFoundComponent } from './404.component';
import { PhotographyComponent } from './photography/gallery.component';
import { PortfolioComponent } from './technology/portfolio.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/blog',
        pathMatch: 'full'
    },
    { path: '404', component: NotFoundComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogListComponent },
    { path: 'blog/:id', component: BlogPostComponent },
    { path: 'photography', component: PhotographyComponent },
    { path: 'technology', component: PortfolioComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
