import { UghPage } from './app.po';

describe('ugh App', () => {
  let page: UghPage;

  beforeEach(() => {
    page = new UghPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
