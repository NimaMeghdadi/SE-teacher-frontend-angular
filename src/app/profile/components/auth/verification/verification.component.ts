import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'slp-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  pending = true;

  ngOnInit(): void {
    // if (this.activatedRoute.snapshot.queryParams)
    //   this.userService
    //     .verifyEmail(this.activatedRoute.snapshot.queryParams.Token)
    //     .subscribe((res) => {
    //       if (res.success) {
    //         this.pending = false;
    //         this.onLogin();
    //       }
    //     });
  }

  onLogin() {
    this.router.navigate(['/profile/login']);
  }
}
