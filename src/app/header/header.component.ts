import { Component } from "@angular/core";

interface PopupPosition {
  top: string;
  left: string;
  'z-index': string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    currentPopupMessage: string = '';
    showPopup: boolean = false;
    popupPosition: PopupPosition = { top: '0px', left: '0px', 'z-index': '0' };

    constructor() { }

    setPopupMessage(event: MouseEvent, message: string) {
        this.currentPopupMessage = message;
        this.showPopup = true;
        this.popupPosition = {
            top: `${event.pageY + 10}px`,
            left: `${event.pageX + 10}px`, 
            'z-index': '1000'  
        };
    }

    clearPopupMessage() {
        this.currentPopupMessage = '';
        this.showPopup = false;
    }
}
