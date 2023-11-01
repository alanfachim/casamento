import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  constructor() { }
  @ViewChild('timer') timer: any;
  ngOnInit(): void {
    const year = new Date().getFullYear();
    const fourthOfJuly = new Date(year, 6, 4).getTime();
    const fourthOfJulyNextYear = new Date(2024, 1, 12, 17).getTime();
    const month = new Date().getMonth();

    // countdown
    let timer = setInterval(() => {

      // get today's date
      const today = new Date().getTime();

      // get the difference
      let diff;
      if (month > 6) {
        diff = fourthOfJulyNextYear - today;
      } else {
        diff = fourthOfJuly - today;
      }

      // math
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      // display
      this.timer.nativeElement.innerHTML =
        "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>dias</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>horas</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>min</div> \
";

    }, 1000);
  }

}
