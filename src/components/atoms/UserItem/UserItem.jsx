import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { cva } from 'class-variance-authority';
import { Link } from 'react-router-dom';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { cn } from '@/lib/utils';

const userItemVariants = cva(
    'flex items-center gap-1.5 justify-start font-normal h-7 px-4 mt-2 text-sm',
    {
        variants: {
            variant: {
                default: 'text-[#f9edffcc]',
                active: 'text-[#481350] bg-white/90 hover:bg-white/80'
            }
        },
        defaultVariants: 'default'
    }
);

export const UserItem = ({
    id,
    label = 'Member',
    image,
    variant
}) => {
    console.log('incoming label', label);
    const { workspace } = useCurrentWorkspace();

    return (
        <Button
            className={cn(userItemVariants({variant}))}
            variant="transparent"
            size="sm"
            asChild
        >
            <Link to={`/workspace/${workspace?._id}/members/${id}`}>
                <Avatar>
                    <AvatarImage src={image} className='rounded-md' />
                    <AvatarFallback
                        className='rounded-md bg-sky-500 text-white'
                    >
                        {label.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <span className='text-sm truncate'>
                    {label}
                </span>
            </Link>
        </Button>
    );
};