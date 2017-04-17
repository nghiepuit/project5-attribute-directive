import { Directive, Input, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[appCollapsed]'
})
export class CollapsedDirective {

	@Output('oCollapsed') oCollapsed = new EventEmitter<boolean>();

	constructor() { }

	@HostBinding('class.is-collapsed') isCollapsed : boolean = true;

	@Input() set appCollapsed(value : boolean){
		this.isCollapsed = value;
	}

	@HostListener('click') toggle(){
		this.isCollapsed = !this.isCollapsed;
		this.oCollapsed.emit(this.isCollapsed);
	}

}
