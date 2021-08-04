module.exports = {
  testEnviroment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFileAfterEnv: ['<rootDir>/.jest/setup.ts']
};
