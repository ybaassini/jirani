import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Post } from '../../models/post.model';
import { ModalDialogService } from '@nativescript/angular';
import { NewRequestModalComponent } from '../new-request-modal/new-request-modal.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts: Post[] = [
    {
      id: '1',
      userId: 'john',
      userName: 'John S.',
      userAvatar: '~/assets/avatar-placeholder.png',
      title: 'Recherche plombier',
      description:
        "Bonjour, Je suis à la recherche d'un plombier car la sortie d'eau de la machine à laver est bloquée. Merci",
      category: 'Services',
      location: {
        address: 'Rouen (Carmes Saint-Maclou)',
        distance: 3.9,
      },
      budget: 50,
      createdAt: new Date(),
      timeAgo: 'postée hier',
      responses: 3,
      isNew: true,
    },
    {
      id: '2',
      userId: 'mathilde',
      userName: 'Mathilde R.',
      userAvatar: '~/assets/avatar-placeholder.png',
      title: 'Recherche hangar',
      description:
        "Bonjour, je cherche un hangar ou endroit assez grand pour pouvoir réparer mon camion en panne merci d'avance",
      category: 'Location',
      location: {
        address: 'Mont-Saint-Aignan (Chaufferie)',
        distance: 4.9,
      },
      budget: 50,
      duration: '1 jour',
      createdAt: new Date(),
      timeAgo: 'postée vendredi',
      responses: 1,
      isNew: false,
    },
  ];

  constructor(
    private modalService: ModalDialogService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    // Initialisation des données
  }

  async showNewRequestModal() {
    const options = {
      viewContainerRef: this.viewContainerRef,
      fullscreen: true,
      animated: true
    };
    
    await this.modalService.showModal(NewRequestModalComponent, options);
  }
}