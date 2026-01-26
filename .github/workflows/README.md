# GitHub Actions Workflows

This directory contains the CI/CD workflows for the Latitude TypeScript SDK.

## Workflows

### 1. **test.yaml** - Quick Tests

Runs on every push and pull request to any branch.

**Triggers:**
- Push to any branch
- Pull request to any branch

**Jobs:**
- Install dependencies
- Run linter
- Run all tests

**Duration:** ~1-2 minutes

### 2. **integration-tests.yaml** - Full Integration Tests

Comprehensive test suite with coverage reporting.

**Triggers:**
- Push to `main` or `develop` branches (when test files change)
- Pull request to `main` or `develop` branches
- Manual trigger via `workflow_dispatch`

**Jobs:**
- **integration-tests**: Runs tests on multiple Bun versions (1.3.3 and latest)
  - Checkout code
  - Setup Bun
  - Install dependencies
  - Run linter
  - Run integration tests
  - Generate coverage report
  - Upload coverage to Codecov
  - Comment results on PR

- **test-summary**: Aggregates results and reports status

**Matrix Strategy:**
- Bun version 1.3.3
- Bun latest

**Duration:** ~3-5 minutes

### 3. **sdk_generation.yaml** - SDK Generation

Handles automatic SDK generation (existing workflow).

### 4. **sdk_publish.yaml** - SDK Publishing

Handles NPM package publishing (existing workflow).

## Test Coverage

The integration tests cover:

- ✅ **40 tests** total
- ✅ Server CRUD operations (list, create, get, update, delete)
- ✅ Pagination and filtering
- ✅ Deploy configuration management
- ✅ IPMI session creation
- ✅ Out-of-band connections
- ✅ Rescue mode operations
- ✅ Schedule deletion management
- ✅ Server actions (reboot, power cycle, shutdown)
- ✅ Error handling (validation errors, rate limiting, auth)
- ✅ Concurrent operations
- ✅ Edge cases

## Codecov Integration

Coverage reports are automatically uploaded to Codecov when:
- Tests run on `main` or `develop` branches
- Using the latest Bun version
- `CODECOV_TOKEN` secret is configured

### Setting up Codecov

1. Go to [codecov.io](https://codecov.io) and sign in with GitHub
2. Add the repository
3. Get the upload token
4. Add it as a secret: `Settings > Secrets and variables > Actions > New repository secret`
   - Name: `CODECOV_TOKEN`
   - Value: `<your-token>`

## Running Workflows Manually

### Via GitHub UI

1. Go to the **Actions** tab
2. Select the workflow (e.g., "Integration Tests")
3. Click **Run workflow**
4. Select the branch
5. Click **Run workflow**

### Via GitHub CLI

```bash
# Run integration tests
gh workflow run integration-tests.yaml

# Run quick tests
gh workflow run test.yaml
```

## Local Testing

Before pushing, run tests locally:

```bash
# Run all tests
bun test

# Run integration tests only
bun test:integration

# Run with coverage
bun test:coverage

# Run in watch mode (for development)
bun test:watch
```

## Workflow Status Badges

Add these badges to your README.md:

```markdown
![Tests](https://github.com/OWNER/REPO/actions/workflows/test.yaml/badge.svg)
![Integration Tests](https://github.com/OWNER/REPO/actions/workflows/integration-tests.yaml/badge.svg)
[![codecov](https://codecov.io/gh/OWNER/REPO/branch/main/graph/badge.svg)](https://codecov.io/gh/OWNER/REPO)
```

Replace `OWNER` and `REPO` with your GitHub username and repository name.

## Troubleshooting

### Tests fail locally but pass in CI

- Ensure you're using the same Bun version: `bun --version`
- Clear dependencies: `rm -rf node_modules bun.lockb && bun install`
- Check for environment-specific issues

### Coverage upload fails

- Verify `CODECOV_TOKEN` is set correctly
- Check Codecov service status
- Review the workflow logs for detailed error messages

### Workflow doesn't trigger

- Check the `paths` filter in the workflow file
- Ensure changes are in the specified directories
- Verify branch names match the workflow triggers

## Best Practices

1. **Keep tests fast**: Integration tests should complete in under 5 minutes
2. **Use matrix strategy**: Test on multiple Bun versions to ensure compatibility
3. **Fail fast**: Use `continue-on-error: false` for critical steps
4. **Cache dependencies**: Bun automatically caches, but you can add explicit caching if needed
5. **Monitor coverage**: Aim for >80% test coverage
6. **Review PR comments**: The workflow comments on PRs with test results

## Future Enhancements

- [ ] Add performance benchmarking
- [ ] Add E2E tests against staging environment
- [ ] Add security scanning (Snyk, dependabot)
- [ ] Add automated changelog generation
- [ ] Add release automation
- [ ] Add Docker image building and testing
