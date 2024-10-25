import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  multi: any[] = [
    {
      "name": "2024-09",
      "series": [
        {
          "name": "Ingresos",
          "value": 7300000
        },
        {
          "name": "Egresos",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "2024-10",
      "series": [
        {
          "name": "Ingresos",
          "value": 7870000
        },
        {
          "name": "Egresos",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "2024-11",
      "series": [
        {
          "name": "Ingresos",
          "value": 5000002
        },
        {
          "name": "Egresos",
          "value": 5800000
        }
      ]
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Periodo';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Valor';
  legendTitle: string = 'Categoría';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi: this.multi });
  }

 onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {
    
  }
}
