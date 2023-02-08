import { Component, OnInit } from '@angular/core';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {
  faCircleChevronRight = faCircleChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
