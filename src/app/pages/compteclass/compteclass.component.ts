import { Component, OnInit } from '@angular/core';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-compteclass',
  templateUrl: './compteclass.component.html',
  styleUrls: ['./compteclass.component.css']
})
export class CompteclassComponent implements OnInit {

faChalkboardUser = faChalkboardUser;
faUserGear = faUserGear;
faGears = faGears;
faChartSimple = faChartSimple;

  constructor() { }

  ngOnInit(): void {
  }

}
