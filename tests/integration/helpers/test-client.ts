/**
 * Test client setup utilities
 */

import { Latitudesh } from '../../../src/sdk/sdk.js';
import { HTTPClient } from '../../../src/lib/http.js';
import { MockHTTPClient } from './mock-http-client.js';

export interface TestClientOptions {
  apiKey?: string;
  serverUrl?: string;
}

export interface TestClient {
  sdk: Latitudesh;
  mockClient: MockHTTPClient;
}

/**
 * Create a test SDK instance with mock HTTP client
 */
export function createTestClient(options: TestClientOptions = {}): TestClient {
  const mockClient = new MockHTTPClient();

  // Create HTTPClient instance with mock fetcher
  const httpClient = new HTTPClient({
    fetcher: mockClient.getFetcher(),
  });

  const sdk = new Latitudesh({
    bearer: options.apiKey || 'test-api-key',
    serverURL: options.serverUrl || 'https://api.latitude.sh',
    httpClient,
  });

  return {
    sdk,
    mockClient,
  };
}

/**
 * Setup common test utilities
 */
export function setupTest() {
  const testClient = createTestClient();

  return {
    ...testClient,
    reset: () => testClient.mockClient.reset(),
  };
}