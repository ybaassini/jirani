import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptUIChartModule } from 'nativescript-ui-chart/angular';
import { NativeScriptFormsModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { PostHeaderComponent } from './components/post/post-header/post-header.component';
import { PostContentComponent } from './components/post/post-content/post-content.component';
import { PostActionsComponent } from './components/post-actions/post-actions.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NewRequestModalComponent } from './components/new-request-modal/new-request-modal.component';
import { RequestDetailComponent } from './components/request-detail/request-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUIChartModule,
    NativeScriptFormsModule
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    PostListComponent,
    PostComponent,
    PostHeaderComponent,
    PostContentComponent,
    PostActionsComponent,
    BottomNavComponent,
    MessagesComponent,
    NewRequestModalComponent,
    RequestDetailComponent,
    DashboardComponent,
    ChatComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}