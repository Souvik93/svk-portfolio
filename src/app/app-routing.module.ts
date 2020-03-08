import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

 {
   path: 'home/:color',
   component: HomeComponent
 },
{
  path: 'resume',
  component: ResumeComponent
},
{
  path: 'error',
  component: NotFoundComponent
},
{
  path: 'about/:id',
  component: AboutComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: '',
  redirectTo: '/home/blue',
  pathMatch: 'prefix'
},
{
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
