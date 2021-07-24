module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/**/index.ts',
    '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  // setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/main/test/cypress'
  ],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/src/test/setup.ts'],

  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}