import { Component, Output } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	collapsed : boolean = false;
	title = 'app works!';

	setClasses(){
		return {
			'glyphicon-chevron-down' : !this.collapsed,
			'glyphicon-chevron-right' : this.collapsed
		}
	}

	onCollapsedChange($event){
		this.collapsed = $event;
	}

}
