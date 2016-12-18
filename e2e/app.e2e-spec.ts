import { SeinfeldCalendarPage } from './app.po';

describe('seinfeld-calendar App', function() {
  let page: SeinfeldCalendarPage;

  beforeEach(() => {
    page = new SeinfeldCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
