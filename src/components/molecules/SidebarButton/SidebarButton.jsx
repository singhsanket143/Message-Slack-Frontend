import { Button } from '@/components/ui/button';

export const SidebarButton = ({
    Icon,
    label,
}) => {
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer gap-y-0.5">
            <Button
                variant="transparent"
                className="size-9 p-2 group-hover:bg-accent/20"
            >
                <Icon className="size-5 text-white group-hover:scale-110 transition-all" />
            </Button>
            <span
                className="text-[10px] text-white group-hover:text-accent"
            >
                {label}
            </span>
        </div>
    );
};