import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { AppRoutes } from '../../types/client/routes';

/**
 * Props for the TypedLink component
 */
export interface TypedLinkProps extends Omit<RouterLinkProps, 'to'> {
  /**
   * The route to navigate to. 
   * Will have intellisense for available routes in the application.
   */
  to: AppRoutes;
}

/**
 * A type-safe wrapper around React Router's Link component
 * that provides intellisense for route paths.
 */
export const TypedLink: React.FC<TypedLinkProps> = ({ to, ...rest }) => {
  return <RouterLink to={to} {...rest} />;
};

export default TypedLink; 