import { Directive,ElementRef,Input,ViewContainerRef ,TemplateRef,Renderer2,HostListener} from '@angular/core';

@Directive({ 
  selector: '[appMouseHoverDirective]'
})
export class MouseHoverDirectiveDirective {

  @Input('appMouseHoverDirective') message: string;

  constructor(private el: ElementRef, private renderer: Renderer2,
    private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) {
    
  }
  @HostListener('hover') onClick() { 
    this._viewContainer.createEmbeddedView(this._templateRef);
    this.renderer.setStyle(this.el.nativeElement,'background-color','blue')
  }

}
