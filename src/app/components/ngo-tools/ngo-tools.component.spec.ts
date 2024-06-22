import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoToolsComponent } from './ngo-tools.component';

describe('NgoToolsComponent', () => {
  let component: NgoToolsComponent;
  let fixture: ComponentFixture<NgoToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgoToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
