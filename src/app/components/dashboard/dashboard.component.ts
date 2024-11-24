import { Component, OnInit } from '@angular/core';
import { Color } from '@nativescript/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalReceived = 53200;
  pendingCount = 12;
  unpaidCount = 5;
  recentTransactions = [
    {
      id: '#0023',
      date: '04 December 2021',
      user: {
        name: 'Mario Brozovic',
        email: 'brozo.m@gmail.com',
        avatar: '~/assets/avatar1.png'
      },
      amount: 5200,
      status: 'Paid'
    },
    {
      id: '#0022',
      date: '03 December 2021',
      user: {
        name: 'Sarah Connor',
        email: 'sarah.c@gmail.com',
        avatar: '~/assets/avatar2.png'
      },
      amount: 6300,
      status: 'Pending'
    }
  ];

  chartData = {
    categories: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [{
      data: [42000, 48000, 46000, 53200, 51000],
      color: new Color('#4CAF50')
    }]
  };

  ngOnInit() {
    // Initialisation des données
  }

  onUpgradeEnterprise() {
    console.log('Upgrade to Enterprise clicked');
  }

  formatCurrency(amount: number): string {
    return `€${amount.toLocaleString()}`;
  }
}