import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appFadeHeader]'
})
export class FadeHeaderDirective implements OnInit {
  @Input('appFadeHeader') toolbar: any;

  constructor(private domCtrl: DomController) { }

  ngOnInit() {
    this.toolbar = this.toolbar.el;
    console.log(this.toolbar);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    let distance = $event.detail.currentY;
    if (distance >= 5) {
      distance = 5;
      const hexDist = distance.toString(16);
      console.log(hexDist);      this.domCtrl.write(() => {
        // this.toolbar.style.setProperty('--background', `#ff0000${hexDist}`);
      });
    }
  }


}
