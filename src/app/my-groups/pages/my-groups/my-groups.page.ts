import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyGroupsService } from '../../../shared/services/my-groups.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: 'my-groups.page.html'
})
export class MyGroupsPage implements OnInit {
  myGroups: any;

  constructor(
    private groupsService: MyGroupsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      response => this.loadGroups()
    );
  }

  loadGroups(): void {
    this.groupsService.getGroups().subscribe(
      response => {
        this.myGroups = response.grupos;
      },
      error => {
        alert(error);
      }
    );
  }

  navigateToGroup(id: string): void {
    this.router.navigateByUrl('/tabs/my-groups/' + id);
  }
}
