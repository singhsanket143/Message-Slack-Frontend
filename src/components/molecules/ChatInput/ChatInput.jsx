import { Editor } from '@/components/atoms/Editor/Edtior';

export const ChatInput = () => {


    async function handleSubmit({ body }) {
        console.log(body);
    }

    return (
        <div
            className="px-5 w-full"
        >
            <Editor 
                placeholder="Type a message..."
                onSubmit={handleSubmit}
                onCancel={() => {}}
                disabled={false}
                defaultValue=""
                
            />

            
        </div>
    );
};