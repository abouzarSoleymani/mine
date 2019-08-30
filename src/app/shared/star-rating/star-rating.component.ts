import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'mat-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class StarRatingComponent implements OnInit {

    @Input('rating') private rating: number = 1;
    @Input('starCount') private starCount: number = 5;
    @Input('color') private color: string = 'primary';
    @Output() private ratingUpdated = new EventEmitter();

    private ratingArr = [];

    constructor(private snackBar: MatSnackBar) {
    }


    ngOnInit() {
        for (let index = 0; index < this.starCount; index++) {
            this.ratingArr.push(index);
        }
    }
    onClick(rating:number) {
        console.log(rating)
        this.rating= rating
        this.ratingUpdated.emit(rating);
        return false;
    }

    showIcon(index:number) {
        if (this.rating >= index + 1) {
            return 'star';
        } else {
            return 'star_border';
        }
    }

}
export enum StarRatingColor {
    primary = "primary",
    accent = "accent",
    warn = "warn"
}
