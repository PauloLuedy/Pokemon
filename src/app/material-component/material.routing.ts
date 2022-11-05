import { Routes } from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const MaterialRoutes: Routes = [
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  }
];
