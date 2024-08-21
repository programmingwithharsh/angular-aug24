import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  @Input() price = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); // custom event

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Star Component Rating", this.rating);
    console.log("Star Component Price", this.price);
  }

  onClick() {
    debugger
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`); // Emits an event containing a given value.
  }
}
