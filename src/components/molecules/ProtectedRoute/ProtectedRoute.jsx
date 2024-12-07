import { LucideLoader2 } from 'lucide-react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/hooks/context/useAuth';

export const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth();

    if(auth.isLoading) {
        return <div><LucideLoader2 className="animate-spin ml-2" />Loading...</div>;
    }

    if(!auth.user || !auth.token) {
        return <Navigate to="/auth/signin" />;
    }

    return children;
};