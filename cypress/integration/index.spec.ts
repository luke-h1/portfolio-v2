describe('index intro texts', () => {
  context('1080p res', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });
    it('should respond with the index page', () => {
      cy.visit('/');
    });
    it('should display correct index text (1)', () => {
      cy.get('[data-testid=i-intro-1]').contains(
        'I am a software tester who loves to work on big projects where I can grow interpersonally & technically.'
      );
    });
    it('should display correct index text (2)', () => {
      cy.get('[data-testid=i-intro-2]').contains(
        'I have experience working in agile environments, testing features end to end, various frontend languages, technologies & tooling.'
      );
    });
    it('should display correct index text (3)', () => {
      cy.get('[data-testid=i-intro-3]').contains(
        'In my spare time I work on open source projects that typically use React, Next, Graphql, Express & Node. You can check out some of my open source projects'
      );
    });
  });
});