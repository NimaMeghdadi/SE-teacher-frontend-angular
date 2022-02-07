import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: MainPageComponent,
      },
      {
        path: 'publishers',
        loadChildren: () =>
          import('./../publishers/publishers.module').then(
            (m) => m.PublishersModule
          ),
      },
      {
        path: 'books',
        loadChildren: () =>
          import('./../books/books.module').then((m) => m.BooksModule),
      },
      {
        path: 'authors',
        loadChildren: () =>
          import('./../authors/authors.module').then((m) => m.AuthorsModule),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./../customers/customers.module').then(
            (m) => m.CustomersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
