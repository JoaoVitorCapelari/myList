import { MyListPage } from './app.po';

describe('my-list App', function() {
  let page: MyListPage;

  beforeEach(() => {
    page = new MyListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
