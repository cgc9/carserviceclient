import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../shared/owner/owner.service';
import { CarService } from '../shared/car/car.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})

export class OwnerEditComponent implements OnInit, OnDestroy {
  owners: Array<any>;
  owner: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private ownerService: OwnerService, private carService: CarService) { }


  ngOnInit() {
    this.owners = [];
    this.sub = this.route.params.subscribe(params => {
      const id = params["id"];
      if (id) {
        this.ownerService.getAll().subscribe((owner: any) => {
          this.owners = owner._embedded.owners;
          for (owner of this.owners) {
            if (owner.dni === id) {
              this.owner = owner;
              this.owner.href = owner._links.self.href;
            }
          }
        });
      }
    });

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/owner-list']);
  }

  save(form: NgForm) {
    this.ownerService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
      this.ownerService.remove(href).subscribe(result => {
        const ownerDni = this.owner.dni;
        this.carService.getAll().subscribe((cars) => {
          for (const car of cars) {
            if (car.ownerDni === ownerDni) {
              car.ownerDni = null;
              this.carService.save(car).subscribe(() => {
              });
            }
          }
        });
        this.gotoList();
      }, error => console.error(error));
}

}
