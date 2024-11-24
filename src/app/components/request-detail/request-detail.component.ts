import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { Provider } from '../../models/provider.model';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  post: Post = {
    id: '1',
    userId: 'john',
    userName: 'John S.',
    userAvatar: '~/assets/avatar-placeholder.png',
    title: 'Recherche plombier',
    description: 'Bonjour, Je suis à la recherche d\'un plombier car la sortie d\'eau de la machine à laver est bloquée. Merci',
    category: 'Services',
    location: {
      address: 'Rouen (Carmes Saint-Maclou)',
      distance: 3.9
    },
    budget: 50,
    createdAt: new Date(),
    timeAgo: 'postée hier',
    responses: 3,
    isNew: true
  };

  providers: Provider[] = [
    {
      id: '1',
      name: 'Pierre D.',
      avatar: '~/assets/avatar-placeholder.png',
      rating: 4.8,
      responseDate: 'Il y a 2h',
      message: 'Bonjour, je peux intervenir dès demain matin pour déboucher votre sortie d\'eau. Je suis plombier depuis 15 ans.',
      price: 45,
      verifiedProfile: true,
      completedJobs: 127,
      responseTime: '< 1h',
      memberSince: 'mars 2022'
    },
    {
      id: '2',
      name: 'Marc L.',
      avatar: '~/assets/avatar-placeholder.png',
      rating: 4.5,
      responseDate: 'Il y a 3h',
      message: 'Disponible cet après-midi pour résoudre votre problème de plomberie.',
      price: 55,
      verifiedProfile: true,
      completedJobs: 84,
      responseTime: '2h',
      memberSince: 'juin 2022'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // TODO: Récupérer l'ID depuis l'URL et charger les données
    const id = this.route.snapshot.params['id'];
  }

  contactProvider(provider: Provider) {
    console.log('Contacter:', provider.name);
  }
}