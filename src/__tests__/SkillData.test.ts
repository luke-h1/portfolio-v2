import { Skills } from '../shared/Skills';

test('skills data is correct', () => {
  expect(Skills).toHaveLength(8);
  expect(Skills.map((skill) => skill.text)).toEqual([
    'React.js',
    'Next.js',
    'GraphQL',
    'Docker',
    'Node.js',
    'Express.js',
    'Manual & automated testing',
    'AWS (EC2, S3, Lightsail)',
  ]);
});

for (let i = 0; i < Skills.length; i += 1) {
  test(`data[${i}] should have keys id, text & src`, () => {
    expect(Skills[i]).toHaveProperty('id');
    expect(Skills[i]).toHaveProperty('text');
    expect(Skills[i]).toHaveProperty('src');
  });
}
