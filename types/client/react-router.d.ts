import { AppRoutes } from './routes';

declare module 'react-router-dom' {
  export interface LinkProps {
    to: AppRoutes | string;
  }
  
  // Add other components that accept route paths as needed
  export interface NavigateProps {
    to: AppRoutes | string;
  }
} 