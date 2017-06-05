import { JWTExamplePage } from './app.po';

describe('jwtexample App', () => {
  let page: JWTExamplePage;

  beforeEach(() => {
    page = new JWTExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
