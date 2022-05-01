# @gms/client

## 0.3.0

### Minor Changes

- Separated AuthProvider from API calls

## 0.2.3

### Patch Changes

- Updated dependencies
  - @gms/components@0.2.0

## 0.2.2

### Patch Changes

- Updated react-query

## 0.2.1

### Patch Changes

- Updated dependencies
- Updated dependencies
  - @gms/components@0.1.0
  - @gms/utils@0.2.0

## 0.2.0

### Minor Changes

- Moved auth token to the axios instance

## 0.1.1

### Patch Changes

- Moved the class reference and loglevel to the `LoggingFactory` constructor

## 0.1.0

### Minor Changes

- Added a `LoggerProvider` component and a `useLogger` hook.

  # Usage

      // Create a LoggerProvider
      <LoggerProvider logger={ConsoleLogger} level="warn">{...}</LoggerProvider>

      // Use the hook
      function Component() {
        const logger = useLogger('Component');

        logger.debug('Test');

        return <div />
      }
