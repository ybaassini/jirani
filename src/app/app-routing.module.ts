import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RequestDetailComponent } from './components/request-detail/request-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: PostListComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'request/:id', component: RequestDetailComponent },
  { path: 'chat/:id', component: ChatComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}