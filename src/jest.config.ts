import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  // other Jest configuration options
};

export default config;
