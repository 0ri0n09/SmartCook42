import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from './profile.service';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ProfileStore } from './profile.store';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [ProfileStore],
})
export class ProfilePage implements OnDestroy, OnInit {
  public userProfile$: Observable<UserProfile> = this.profileStore.userProfile$;
  private userProfileSubscription: Subscription;
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private readonly profileStore: ProfileStore
  ) {}

  ngOnInit(): void {
    this.userProfileSubscription = this.profileService
      .getUserProfile()
      .subscribe((userProfile: UserProfile) => this.profileStore.setState(userProfile));
  }

  ngOnDestroy(): void {
    this.userProfileSubscription?.unsubscribe();
  }

  async logOut(): Promise<void> {
    await this.authService.logout();
    this.router.navigateByUrl('login');
  }

  updateName(): void {
    this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
      const alert = await this.alertCtrl.create({
        subHeader: 'Change your name',
        inputs: [
          {
            type: 'text',
            name: 'fullName',
            placeholder: 'Your full name',
            value: userProfile.fullName,
          },
        ],
        buttons: [
          { text: 'Cancel' },
          {
            text: 'Save',
            handler: async data => {
              await this.profileStore.updateUserName(data.fullName);
              const toast = await this.toastController.create({
                message: 'Fullname updated',
                duration: 2000,
                position: 'top',
                animated: true,
                color: 'success'
              });
              toast.present();
            },
          },
        ],
      });
      return await alert.present();
    });
  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Change your email',
      inputs: [
        { type: 'text', name: 'newEmail', placeholder: 'Your new email', value: '',},
        { name: 'password', placeholder: 'Your password', type: 'password', value: '',},
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: async data => {
            if (data.newEmail && data.password) {
              await this.profileStore.updateUserEmail({ email: data.newEmail, password: data.password });
              const toast = await this.toastController.create({
                message: 'Email updated',
                duration: 2000,
                position: 'top',
                animated: true,
                color: 'success'
              });
              toast.present();
            } else {
              const errorToast = await this.toastController.create({
                message: 'Please fill in all fields',
                duration: 2000,
                position: 'top',
                animated: true,
                color: 'danger'
              });
              errorToast.present();
            }
          },
        },
      ],
    });
    return await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Change your password',
      inputs: [
        { name: 'newPassword', placeholder: 'New password', type: 'password' },
        { name: 'oldPassword', placeholder: 'Old password', type: 'password' },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: async data => {
            if (data.password && data.oldPassword) {
              await this.profileStore.updateUserPassword({ newPassword: data.newPassword, oldPassword: data.oldPassword });
              const toast = await this.toastController.create({
                message: 'Password updated',
                duration: 2000,
                position: 'top',
                animated: true,
                color: 'success'
              });
              toast.present();
            } else {
              const errorToast = await this.toastController.create({
                message: 'Please fill in all fields',
                duration: 2000,
                position: 'top',
                animated: true,
                color: 'danger'
              });
              errorToast.present();
            }
          },
        },
      ],
    });
    return await alert.present();
  }
}
