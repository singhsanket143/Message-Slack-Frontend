import { FaChevronDown } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const ChannelHeader = ({ name }) => {
    return (
        <div
            className="bg-white border-b h-[50px] flex items-center px-4 overflow-hidden"
        >
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="ghost"
                        className="text-lg font-semibold px-2 w-auto overflow-hidden"
                    >
                        <span># {name} </span>
                        <FaChevronDown className='size-3 ml-2' />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            # {name}
                        </DialogTitle>

                    </DialogHeader>
                    <div
                        className='px-4 pb-4 flex flex-col gap-y-2'
                    >   
                        <div
                            className='px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-100'
                        >
                            <div className='flex items-center justify-between'>
                                <p className='text-sm font-semibold'>
                                    Channel name
                                </p>
                                <p className='text-sm font-semibold'>
                                    Edit 
                                </p>
                            </div>
                            <p className='text-sm'>
                                {name}
                            </p>

                        </div>

                        {/* HW implement edit dialog for editting name of a channel */}

                    </div>
                </DialogContent>
            </Dialog>

        </div>
    );
};