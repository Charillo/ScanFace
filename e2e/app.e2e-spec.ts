import { ScanFacePage } from './app.po';

describe('scan-face App', () => {
  let page: ScanFacePage;

  beforeEach(() => {
    page = new ScanFacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
