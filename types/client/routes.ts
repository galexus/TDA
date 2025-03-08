/**
 * This file defines the application routes for TypeScript type checking
 * and intellisense for the <Link> component's "to" prop.
 */

// Define the available route paths as a union type
export type AppRoutes = 
  | "/" 
  | "/members"
  | "/publications"
  | "/events"
  | "/opportunities" ;

// Type to check URL params (for future use with dynamic routes)
export type RouteParams = {
  // Add route params here when needed, for example:
  // "/blog/:id": { id: string }
};

/**
 * This type utility extracts params from a route path
 * For use with future dynamic routes
 */
export type ExtractRouteParams<T extends string> = 
  T extends `${infer Start}:${infer Param}/${infer Rest}` 
    ? { [k in Param | keyof ExtractRouteParams<`/${Rest}`>]: string }
    : T extends `${infer Start}:${infer Param}` 
      ? { [k in Param]: string }
      : {}; 