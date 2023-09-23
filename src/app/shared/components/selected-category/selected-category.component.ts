import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css']
})
export class SelectedCategoryComponent {
  @Input() title!: string;
  @Input() categories!: any;
  @Output() categoryEvent = new EventEmitter<string>()


  sendCat(event: any){
    this.categoryEvent.emit(event)
  }

}
