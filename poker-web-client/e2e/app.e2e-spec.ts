import { PokerWebClientPage } from './app.po';

describe('poker-web-client App', () => {
  let page: PokerWebClientPage;

  beforeEach(() => {
    page = new PokerWebClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
