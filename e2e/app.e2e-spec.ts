import { CarrentPage } from './app.po';

describe('carrent App', () => {
  let page: CarrentPage;

  beforeEach(() => {
    page = new CarrentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
