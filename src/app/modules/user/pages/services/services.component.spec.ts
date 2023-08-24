
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ServicesComponent } from './services.component';
import { NearbyservicesService } from '../../services/nearbyservices.service';
import { of } from 'rxjs';
import { availableService } from '../../model/serviceState';
import { LoginnavbarComponent } from '../loginnavbar/loginnavbar.component';
import { StoreModule } from '@ngrx/store';
import { UserRoutingModule } from '../../user-routing.module';
import { ActivatedRoute } from '@angular/router';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;
  let mockNearbyServicesService: jasmine.SpyObj<NearbyservicesService>;

  const mockServiceData: availableService = {
    services: [
      {
        title: 'Service 1',
        thumbnail: ['thumbnail_url_1'],
        description: 'Description 1',
      },
    ],
  };

  beforeEach(
    waitForAsync(() => {
      mockNearbyServicesService = jasmine.createSpyObj('NearbyservicesService', ['getNearByServices']);
      mockNearbyServicesService.getNearByServices.and.returnValue(of(mockServiceData));

      TestBed.configureTestingModule({
        declarations: [ServicesComponent,LoginnavbarComponent],
        imports:[StoreModule.forRoot({}),UserRoutingModule],
        providers: [{ provide: NearbyservicesService, useValue: mockNearbyServicesService, },{ provide: ActivatedRoute, useValue: {} },],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAvailableServices and populate allServices on ngOnInit', () => {
    component.ngOnInit();
    expect(mockNearbyServicesService.getNearByServices).toHaveBeenCalled();
    expect(component.allServices).toEqual(mockServiceData);
  });

  it('should render services correctly in the template', () => {
    component.allServices = mockServiceData;
    fixture.detectChanges();

  });
});
