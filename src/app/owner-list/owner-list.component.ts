import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../shared/owner/owner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Array<any>;
  selected: Array<any> ;

  constructor(private route: ActivatedRoute, private router: Router, private ownerService: OwnerService) { }

  ngOnInit() {
    this.selected = [];
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
    });
  }

  gotoList() {
    this.router.navigate(['/owner-list']);
  }

  selectedItem(owner: any) {
    this.selected.push(owner);
    this.gotoList();
  }

  remove() {
    for (const owner of this.selected) {
      console.log("Eliminar:"+ owner);
      this.ownerService.remove(owner.href).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }
  }




}

