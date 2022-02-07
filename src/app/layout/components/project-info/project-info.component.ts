import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements OnInit {
  data: any[] = [
    // {
    //   title: 'Setting',
    //   data: ['nothing yet'],
    // },
    // {
    //   title: 'Theme',
    //   data: ['no theme'],
    // },
    {
      title: 'About US',
      data: [
        'Professor: Dr.MohammadPur',
        'Producers: Reza Shakeri - Farid Zaredar',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
