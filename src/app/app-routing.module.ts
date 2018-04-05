import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './landing-page/landing-page.module#LandingPageModule'
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [PageNotFoundComponent]
})
export class AppRoutingModule {}
