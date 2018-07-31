import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {


    dataObj = { 'title': 'Cours de danse',
        style: { 'font-family': 'Gill'},
        img2: { 'background-image': 'url(../../assets/img/pic6.png)',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'width': '50vh',
            'height': '35vh',
            'margin': '20px auto'},
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ' +
            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. ' +
            'Duis aute irure dolor in repre henderit in voluptate velit essecillum dolore eu ' +
            'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
            'culpa qui officia deserunt mollit anim id est laborum.'
    };

    constructor() { }

    ngOnInit() {
    }

}
