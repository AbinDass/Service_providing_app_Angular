import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceProfileCardComponent } from './service-profile-card.component';
import { ControlpanelService } from '../../services/controlpanel.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { workerState } from '../../model/workerState';

describe('ServiceProfileCardComponent', () => {
  let component: ServiceProfileCardComponent;
  let fixture: ComponentFixture<ServiceProfileCardComponent>;
  let mockControlPanelService: jasmine.SpyObj<ControlpanelService>;
  let mockStore: jasmine.SpyObj<Store>;
  let mockRouter: jasmine.SpyObj<Router>;

  const worker: workerState = {
    user: {
      _id: 'worker_id',
      firstname: 'John',
      secondname: 'Doe',
      email: 'john@gmail.com',
      location: 'Example Location',
      phone: '1234567890',
      profilepicture: ['profile_picture_url'],
    },
    distric: 'Example District',
    servicetitle: 'Example Service',
    labour: 200,
    approved: false,
    createdAt: '',
    description: '',
    liecence: [],
    location: '',
    state: '',
    updatedAt: '',
    _id: ''
  };

  beforeEach(() => {
    mockControlPanelService = jasmine.createSpyObj('ControlpanelService', ['getRequests', 'followRequest', 'cancelFollowRequest']);
    mockStore = jasmine.createSpyObj('Store', ['select']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ServiceProfileCardComponent],
      providers: [
        { provide: ControlpanelService, useValue: mockControlPanelService },
        { provide: Store, useValue: mockStore },
        { provide: Router, useValue: mockRouter },
      ],
    });
    const mockUserId = 'user-id'
    fixture = TestBed.createComponent(ServiceProfileCardComponent);
    component = fixture.componentInstance;
    component.Worker = worker;
    component.fromId = mockUserId
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get requests and set status', () => {
    const mockStatus = 'confirmed';
    mockControlPanelService.getRequests.and.returnValue(of(mockStatus));

    component.ngOnInit();

    expect(mockControlPanelService.getRequests).toHaveBeenCalledWith(component.fromId, component.Worker.user._id);
    expect(component.status).toBe(mockStatus);
  });
});
