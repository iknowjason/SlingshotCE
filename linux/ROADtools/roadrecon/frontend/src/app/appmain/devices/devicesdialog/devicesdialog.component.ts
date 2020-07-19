import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesItem } from '../../aadobjects.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Location } from '@angular/common';
@Component({
  template: ''
})
export class DevicesdialogInitComponent implements OnInit {
  device: DevicesItem;
  myurl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private location: Location
  ) {
    this.myurl = this.router.url;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { device: DevicesItem }) => {
        const dialogRef = this.dialog.open(DevicesdialogComponent, {
          data: data.device
        });
        dialogRef.afterClosed().subscribe(result => {
          if(this.router.url == this.myurl){
            this.location.back();
          }

        });
      });
  }

}

@Component({
  selector: 'app-devicesdialog',
  templateUrl: './devicesdialog.component.html',
  styleUrls: ['./devicesdialog.component.less']
})
export class DevicesdialogComponent {
  public displayedColumns: string[] = ['displayName', 'description']
  public displayedColumnsServicePrincipals: string[] = ['displayName', 'publisherName', 'microsoftFirstParty', 'passwordCredentials', 'keyCredentials', 'appRoles', 'oauth2Permissions', 'owner'];
  public displayedColumnsDevices: string[] = ['displayName', 'deviceManufacturer', 'accountEnabled', 'deviceModel', 'deviceOSType', 'deviceOSVersion', 'deviceTrustType', 'isCompliant', 'isManaged', 'isRooted'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
    public dialogRef: MatDialogRef<DevicesdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public device: DevicesItem
  ) { }

}
