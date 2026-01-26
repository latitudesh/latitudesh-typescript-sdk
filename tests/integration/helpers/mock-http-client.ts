/**
 * Mock HTTP Client for Integration Tests
 *
 * This mock client intercepts HTTP requests and returns predefined responses
 * to simulate API behavior without making actual network calls.
 */

import type { Fetcher, HTTPClientOptions } from '../../../src/lib/http.js';

export interface MockResponse {
  status: number;
  headers?: Record<string, string>;
  body?: unknown;
}

export interface MockRequest {
  method: string;
  url: string;
  headers?: Record<string, string>;
  body?: unknown;
}

export class MockHTTPClient {
  private responses: Map<string, MockResponse[]> = new Map();
  private requests: MockRequest[] = [];

  /**
   * Register a mock response for a specific endpoint
   */
  mockResponse(method: string, urlPattern: string | RegExp, response: MockResponse): void {
    const key = `${method}:${urlPattern.toString()}`;
    const existing = this.responses.get(key) || [];
    existing.push(response);
    this.responses.set(key, existing);
  }

  /**
   * Get the mock fetcher function
   */
  getFetcher(): Fetcher {
    return async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
      // Extract URL and method from input
      let url: string;
      let method: string;

      if (input instanceof Request) {
        url = input.url;
        method = input.method;
      } else if (input instanceof URL) {
        url = input.toString();
        method = init?.method || 'GET';
      } else {
        url = input;
        method = init?.method || 'GET';
      }

      // Record the request
      this.requests.push({
        method,
        url,
        headers: init?.headers as Record<string, string>,
        body: init?.body,
      });

      // Find matching mock response
      const mockResponse = this.findMockResponse(method, url);

      if (!mockResponse) {
        throw new Error(`No mock response configured for ${method} ${url}`);
      }

      // Create a Response object
      const headers = new Headers(mockResponse.headers || {
        'content-type': 'application/vnd.api+json',
      });

      const body = mockResponse.body
        ? JSON.stringify(mockResponse.body)
        : undefined;

      return new Response(body, {
        status: mockResponse.status,
        headers,
      });
    };
  }

  /**
   * Find a matching mock response for the given method and URL
   */
  private findMockResponse(method: string, url: string): MockResponse | undefined {
    for (const [key, responses] of this.responses.entries()) {
      const [mockMethod, mockUrl] = key.split(':', 2);

      if (mockMethod !== method) continue;

      // Check if URL matches (either exact match or regex)
      const urlPattern = mockUrl?.startsWith('/')
        ? new RegExp(mockUrl.slice(1, -1)) // Remove regex delimiters
        : mockUrl;

      const matches = typeof urlPattern === 'string'
        ? url.includes(urlPattern)
        : urlPattern instanceof RegExp && urlPattern.test(url);

      if (matches && responses && responses.length > 0) {
        return responses.shift(); // Return and remove first response
      }
    }

    return undefined;
  }

  /**
   * Get all recorded requests
   */
  getRequests(): MockRequest[] {
    return [...this.requests];
  }

  /**
   * Get the last recorded request
   */
  getLastRequest(): MockRequest | undefined {
    return this.requests[this.requests.length - 1];
  }

  /**
   * Clear all mock responses and recorded requests
   */
  reset(): void {
    this.responses.clear();
    this.requests = [];
  }

  /**
   * Verify that a request was made
   */
  verifyRequest(method: string, urlPattern: string | RegExp): boolean {
    return this.requests.some(req => {
      if (req.method !== method) return false;

      if (typeof urlPattern === 'string') {
        return req.url.includes(urlPattern);
      }

      return urlPattern.test(req.url);
    });
  }

  /**
   * Count requests matching the criteria
   */
  countRequests(method?: string, urlPattern?: string | RegExp): number {
    return this.requests.filter(req => {
      if (method && req.method !== method) return false;

      if (urlPattern) {
        if (typeof urlPattern === 'string') {
          return req.url.includes(urlPattern);
        }
        return urlPattern.test(req.url);
      }

      return true;
    }).length;
  }
}

