import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ServiceprofileComponent } from './serviceprofile.component';
import { NearbyservicesService } from '../../services/nearbyservices.service';
import { Store } from '@ngrx/store';
import { SubscriptionService } from '../../services/subscription.service';
import { of } from 'rxjs';
import { LoginnavbarComponent } from '../loginnavbar/loginnavbar.component';
import { BannerComponent } from '../banner/banner.component';
import { SubscribeNotifyComponent } from '../subscribe-notify/subscribe-notify.component';

describe('ServiceprofileComponent', () => {
  let component: ServiceprofileComponent;
  let fixture: ComponentFixture<ServiceprofileComponent>;
  let mockActivatedRoute: any;
  let mockNearbyservicesService: any;
  let mockStore: any;
  let mockSubscriptionService: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      paramMap: of({ get: () => 'test-service-name' }),
    };

    mockNearbyservicesService = {
      locationSubject$: of('test-location'),
      getServiceProfiles: jasmine.createSpy('getServiceProfiles').and.returnValue(of([])),
    };

    mockStore = {
      select: jasmine.createSpy('select').and.returnValue(of(null)),
    };

    mockSubscriptionService = {
      checkSubsciption: jasmine.createSpy('checkSubsciption').and.returnValue(of({ success: true })),
      checkService: jasmine.createSpy('checkService').and.returnValue(of({ success: true })),
    };

    await TestBed.configureTestingModule({
      declarations: [ServiceprofileComponent,LoginnavbarComponent,BannerComponent,SubscribeNotifyComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: NearbyservicesService, useValue: mockNearbyservicesService },
        { provide: Store, useValue: mockStore },
        { provide: SubscriptionService, useValue: mockSubscriptionService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get service profiles and check subscription on init', () => {
    component.ngOnInit();
    expect(mockNearbyservicesService.getServiceProfiles).toHaveBeenCalledWith(
      'test-service-name',
      component.userid,
      'test-location'
    );
  });
});
