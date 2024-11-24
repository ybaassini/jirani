import { Component } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular';
import { View } from '@nativescript/core';

@Component({
  selector: 'app-new-request-modal',
  templateUrl: './new-request-modal.component.html',
  styleUrls: ['./new-request-modal.component.css']
})
export class NewRequestModalComponent {
  constructor(private params: ModalDialogParams) {}

  close() {
    this.params.closeCallback();
  }

  onShownModally() {
    const view = this.params.context.view as View;
    view.translateY = 300;
    view.animate({
      translate: { x: 0, y: 0 },
      duration: 200,
      curve: 'easeOut'
    });
  }

  submit(args) {
    // TODO: Implement form submission
    this.close();
  }
}