import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ens',
    templateUrl: './ens.component.html',
    styleUrls: ['./ens.component.scss']
})
export class EnsComponent implements OnInit {

    dataObj = { 'title': 'Stages initiation enfants',
        style: { 'font-family': 'Gidd'},
        img: { 'background-image': 'url(../../assets/img/pic5.png)',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'width': '50vh',
            'height': '35vh',
            'margin': '20px auto'},
        'text2': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
            'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
            'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
            'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };

    constructor() { }

    ngOnInit() {
    }

}
