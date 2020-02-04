import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../shared/car/car.service';
import { OwnerService } from '../shared/owner/owner.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-owner-car',
  templateUrl: './owner-car.component.html',
  styleUrls: ['./owner-car.component.css']
})
export class OwnerCarComponent implements OnInit {
  cars: Array<any>;
  //owner: any = {};
  owners: Array<any>;
  ownerName: any;


  constructor(private carService: CarService, private giphyService: GiphyService,
              private route: ActivatedRoute, private router: Router, private ownerService: OwnerService) { }

  ngOnInit() {
    this.owners = [];
    this.ownerService.getAll().subscribe((owner: any) => {
          this.owners = owner._embedded.owners;
        });
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      for (const car of this.cars) {
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
        for (const owner of this.owners) {
          if(owner.dni == car.ownerDni){
            car.ownerDni = owner.name;
            console.log(car.ownerDni);

          }

        }
      }
    });
  }



  }
