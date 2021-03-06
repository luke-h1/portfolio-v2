describe('About intros', () => {
  // For desktop view
  context('1080p resolution', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });
    it('Should visit home page', () => {
      cy.visit('/about');
    });
    it('Should contain correct text', () => {
      cy.get('[data-testid=ab-intro-1]').contains(
        'Hi, my name is Luke and I enjoy working on big projects and thinking about how solutions can be implemented in order to build scalable & maintainable software. I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment'
      );
    });
    it('should contain correct text', () => {
      cy.get('[data-testid=ab-intro-2]').contains(
        "Here is a list of tech I've been working with recently"
      );
    });
  });
});
