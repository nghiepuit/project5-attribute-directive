import { Project5ExpandCollapsePage } from './app.po';

describe('project5-expand-collapse App', () => {
  let page: Project5ExpandCollapsePage;

  beforeEach(() => {
    page = new Project5ExpandCollapsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
