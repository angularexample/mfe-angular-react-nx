import { AfterContentInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-react-wrapper',
  template: '<div #reactWrapper></div>',
})
export class ReactWrapper implements AfterContentInit {
  @ViewChild('reactWrapper', { read: ElementRef, static: true }) reactWrapper!: ElementRef;
  private route: ActivatedRoute = inject(ActivatedRoute);

  async ngAfterContentInit(): Promise<void> {
    const elementName = this.route.snapshot.data['elementName'];
    const loader = this.route.snapshot.data['loadChildren'];
    await loader();
    const element = document.createElement(elementName);
    this.reactWrapper.nativeElement.appendChild(element);
  }
}
