import { Component, ElementRef, OnInit, VERSION } from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  constructor(
    private el: ElementRef,
    private focusMonitor: FocusMonitor
  ) {}

  ngOnInit() {
    this.focusMonitor.monitor(this.el.nativeElement, true);
  }
}
