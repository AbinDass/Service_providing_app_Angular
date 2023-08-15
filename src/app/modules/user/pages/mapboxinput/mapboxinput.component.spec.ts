import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxinputComponent } from './mapboxinput.component';

describe('MapboxinputComponent', () => {
  let component: MapboxinputComponent;
  let fixture: ComponentFixture<MapboxinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapboxinputComponent]
    });
    fixture = TestBed.createComponent(MapboxinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
