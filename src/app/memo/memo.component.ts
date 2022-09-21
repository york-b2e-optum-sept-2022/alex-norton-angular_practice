import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  @Input() memo: any;
  @Output() onDelete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick() {
    console.log(this.memo)
    console.log('clicked delete')
    this.onDelete.emit(this.memo);
  }

}
