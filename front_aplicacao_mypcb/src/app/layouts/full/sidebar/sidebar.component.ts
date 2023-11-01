import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  show: string | null;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems, private route: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.show = localStorage.getItem('lst')
    if(this.route.snapshot.queryParams.lst){
      this.show = 'S'
    }
  }
  @Output() close = new EventEmitter<number>();

  menuSelected() {
    this.close.emit(1)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
