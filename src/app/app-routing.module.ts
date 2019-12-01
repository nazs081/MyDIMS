import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'openedshelters-detail/:shelter',
    loadChildren: () => import('./openedshelters-detail/openedshelters-detail.module').then( m => m.OpenedsheltersDetailPageModule)
  },
  {
    path: 'notify-detail/:id',
    loadChildren: () => import('./notify-detail/notify-detail.module').then( m => m.NotifyDetailPageModule)
  },
  {
    path: 'notify-comment/:id',
    loadChildren: () => import('./notify-comment/notify-comment.module').then( m => m.NotifyCommentPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
