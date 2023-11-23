import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { LocalStorageService } from 'src/app/shared/servces/localStorage.service';

@Component({
  selector: 'app-hovbar',
  templateUrl: './hovbar.component.html',
  styleUrls: ['./hovbar.component.scss'],
})
export class HovbarComponent implements OnInit {
  cartLength: number = 0;

  constructor(private localStorageService:LocalStorageService){}
  ngOnInit(): void {
    }


}
