import { useMutation } from '@tanstack/react-query';

import { signUpRequest } from '@/apis/auth';

export const useSignup = () => {
    const { isPending, isSuccess, error, mutate: signupMutation } = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (data) => {
            console.log('Scuccessfuilly signed up', data);
        },
        onError: (error) => {
            console.error('Failed to sign up', error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
};