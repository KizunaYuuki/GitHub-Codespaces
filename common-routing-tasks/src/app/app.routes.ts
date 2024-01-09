import { ResolveFn, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'first-component',
    title: 'First component',
    component: FirstComponent,  // this is the component with the <router-outlet> in the template
    // children: [
    //   {
    //     path: 'child-a',  // child route path
    //     title: resolvedChildATitle,
    //     component: ChildAComponent,  // child route component that the router renders
    //   },
    //   {
    //     path: 'child-b',
    //     title: 'child b',
    //     component: ChildBComponent,  // another child route component that the router renders
    //   },
    // ],
  },
  { path: 'second-component', title: 'Second component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
