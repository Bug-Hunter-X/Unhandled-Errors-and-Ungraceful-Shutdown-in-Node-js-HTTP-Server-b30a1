# Node.js HTTP Server Bug: Unhandled Errors and Ungraceful Shutdown

This repository demonstrates a common error in Node.js HTTP servers: the lack of proper error handling and a graceful shutdown mechanism.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version.

## Bug Description

The original code creates a simple HTTP server using the `http` module. However, it lacks error handling for situations such as port conflicts and does not implement a graceful shutdown procedure. This leads to server crashes without informative error messages and potential disruptions to active connections when the server is terminated.

## Solution

The solution addresses these issues by:

1.  Adding an `error` event listener to the server to catch potential errors during startup.
2.  Implementing a graceful shutdown mechanism using the `server.close()` method, ensuring that active connections are handled properly before the server terminates.

## How to reproduce the bug

1.  Clone the repository.
2.  Run `node bug.js`.
3.  Attempt to run another instance of the server on port 8080 (this will demonstrate a port conflict).
4.  Forcefully terminate the server using Ctrl+C (demonstrates the lack of graceful shutdown).

## How to run the solution

1.  Clone the repository.
2.  Run `node bugSolution.js`.
3.  Attempt to run another instance of the server on port 8080 and note the improved error handling.
4.  Forcefully terminate the server using Ctrl+C and observe the graceful shutdown behavior.