# @gms/client

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
