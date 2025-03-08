import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../types/client/routes';

/**
 * A type-safe wrapper around useNavigate hook from react-router-dom
 * Provides intellisense for available routes
 */
export function useTypedNavigate() {
  const navigate = useNavigate();
  
  return {
    /**
     * Navigate to a typed route
     * @param to The route to navigate to (with intellisense)
     * @param options Navigation options
     */
    navigate: (to: AppRoutes, options?: { replace?: boolean; state?: any }) => {
      return navigate(to, options);
    },
    
    /**
     * Go back in the navigation history
     */
    goBack: () => {
      navigate(-1);
    },
    
    /**
     * Go forward in the navigation history
     */
    goForward: () => {
      navigate(1);
    }
  };
} 