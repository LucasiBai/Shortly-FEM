import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCardListComponent } from './icon-card-list.component';
import { IconCardDataI } from '../../models/icon-card-data-i';

const mockCardListData: IconCardDataI[] = [
  {
    header: 'Test Header data',
    content: 'Test Content data',
    icon: '../../../../assets/images/icon-detailed-records.svg',
  },
  {
    header: 'Test Header data',
    content: 'Test Content data',
    icon: '../../../../assets/images/icon-detailed-records.svg',
  },
];

describe('IconCardListComponent', () => {
  let component: IconCardListComponent;
  let fixture: ComponentFixture<IconCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render correctly with empty card data', () => {
    expect(component).toBeTruthy();
  });

  describe('Test IconCardList with card data', () => {
    beforeEach(() => {
      component.cardList = mockCardListData;

      fixture.detectChanges();
    });

    it('Should render IconCards', () => {
      const cards: any =
        fixture.debugElement.nativeElement.querySelectorAll('app-icon-card');

      expect(cards.length).toEqual(mockCardListData.length);

      expect(cards[0].children[1].innerText).toEqual(
        mockCardListData[0].header
      );
      expect(cards[1].children[1].innerText).toEqual(
        mockCardListData[1].header
      );
    });
  });
});
