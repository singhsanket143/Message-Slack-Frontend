import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignin } from '@/hooks/apis/auth/useSignin';

import { SigninCard } from './SigninCard';

export const SigninContainer = () => {

    const navigate = useNavigate();

    const [validationError, setValidationError] = useState(null);

    const [signinForm, setSigninForm] = useState({
        email: '',
        password: ''
    });

    const { isSuccess, isPending, error, signinMutation } = useSignin();

    const onSigninFormSubmit = async (e) => {
        e.preventDefault();

        if(!signinForm.email || !signinForm.password) {
            console.log('Please fill all the fields');
            setValidationError({ message: 'Please fill all the fields' });
            return;
        }
        setValidationError(null);
        await signinMutation({
            email: signinForm.email,
            password: signinForm.password
        });
    };

    useEffect(() => {
        if(isSuccess) {
            setTimeout(() => {
                navigate('/home');
            }, 3000);
        }
            
    }, [isSuccess, navigate]);

    return (
        <SigninCard 
            onSigninFormSubmit={onSigninFormSubmit}
            signinForm={signinForm} 
            setSigninForm={setSigninForm}
            validationError={validationError}
            error={error}
            isSuccess={isSuccess}
            isPending={isPending}
        />
    );
};