import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
    public user;

    constructor(private appService: AppService) {}

    ngOnInit(): void {
        this.user = this.appService.user;
    }
}
