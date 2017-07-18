import { NgCookAppPage } from './app.po';

describe('ng-cook-app App', () => {
  let page: NgCookAppPage;

  beforeEach(() => {
    page = new NgCookAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
