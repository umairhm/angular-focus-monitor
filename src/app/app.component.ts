import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit  {
  focusOrigin: FocusOrigin;
  appliedCssClasses: string;
  constructor(
    private el: ElementRef,
    private focusMonitor: FocusMonitor
  ) {}

  ngOnInit() {
    this.focusMonitor.monitor(this.el.nativeElement, true)
      .subscribe(origin => {
        this.focusOrigin = origin;
        this.appliedCssClasses = '';
        if (origin) {
          this.appliedCssClasses = `cdk-focused cdk-${origin}-focused`;
        }
      });
  }
}
