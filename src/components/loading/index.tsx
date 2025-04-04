
interface LoadingProps {
    size: number;
}    
export function Loading ({size} :LoadingProps   ) {

    return (
        <div className="flex justify-center  items-center h-10">
            <div style={{ width: `${size}px`, height: `${size}px`}} className="animate-spin">
                <div className="h-full w-full border-4 border-t-purple-500
                         border-b-purple-700 rounded-[50%] ">
                    
                </div>

            </div>

        </div>
    )
} 