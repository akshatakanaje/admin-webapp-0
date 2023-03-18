import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit {

  updation: boolean = false;
  loader: boolean = false;

  @Input()
  public orderInfo:any;
  
  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeModel.emit();
  }

}
