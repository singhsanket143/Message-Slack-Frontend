import { useMutation } from '@tanstack/react-query';

import { signUpRequest } from '@/apis/auth';
import { useToast } from '@/hooks/use-toast';

export const useSignup = () => {
    const { toast } = useToast();
    const { isPending, isSuccess, error, mutateAsync: signupMutation } = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (data) => {
            console.log('Scuccessfuilly signed up', data);
            toast({
                title: 'Successfully signed up',
                message: 'You will be redirected to the login page in a few seconds',
                type: 'success'
            });
        },
        onError: (error) => {
            console.error('Failed to sign up', error);
            toast({
                title: 'Failed to sign up',
                message: error.message,
                type: 'error',
                variant: 'destructive'
            });
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
};