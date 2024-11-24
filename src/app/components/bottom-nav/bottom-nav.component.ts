import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ModalDialogService, ModalDialogOptions } from '@nativescript/angular';
import { ViewContainerRef } from '@angular/core';
import { NewRequestModalComponent } from '../new-request-modal/new-request-modal.component';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent {
  constructor(
    private routerExtensions: RouterExtensions,
    private modalService: ModalDialogService,
    private viewContainerRef: ViewContainerRef
  ) {}

  navigateTo(route: string) {
    this.routerExtensions.navigate([route], {
      transition: { name: 'fade' },
    });
  }

  async showNewRequestModal() {
    const options: ModalDialogOptions = {
      viewContainerRef: this.viewContainerRef,
      context: {},
      fullscreen: true,
    };

    await this.modalService.showModal(NewRequestModalComponent, options);
  }
}