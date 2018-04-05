import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProjectComponent } from './add-project/add-project.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: 'user',
        component: UserComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'addProject', component: AddProjectComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [AddProjectComponent, ProfileComponent, UserComponent]
})
export class UserRoutingModule {}
