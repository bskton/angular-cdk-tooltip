import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';

import { AwesomeTooltipComponent } from './awesome-tooltip/awesome-tooltip.component';

@Directive({
  selector: '[appAwesomeTooltip]'
})
export class AwesomeTooltipDirective implements OnInit {

  @Input('appAwesomeTooltip') text = '';

  private overlayRef: OverlayRef;

  constructor(private elementRef: ElementRef,
              private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder) { }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }]);
    this.overlayRef = this.overlay.create({positionStrategy});
  }

  @HostListener('mouseenter')
  show() {
    const tooltipPortal = new ComponentPortal(AwesomeTooltipComponent);
    const tooltipRef: ComponentRef<AwesomeTooltipComponent> = this.overlayRef.attach(tooltipPortal);
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }

}
