import {Directive, Input, ViewContainerRef, TemplateRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[abc]'
})

export class MyNgFor implements OnChanges{
  @Input() abcOf :[];
  constructor(private viewContainerRef: ViewContainerRef,
  private templateRef: TemplateRef<any>){

  }

  ngOnChanges(){
    this.viewContainerRef.clear();
 for (const input of this.abcOf) {

    this.viewContainerRef.createEmbeddedView(this.templateRef,{$implicit: input})
    };
  }
}