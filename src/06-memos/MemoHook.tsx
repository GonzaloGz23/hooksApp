import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle";

export const MemoHook = () => {

    const [title, setTitle] = useState('Hola');
    const [subtitle, setSubtitle] = useState('Mundo');

    const handleMyApiCall = useCallback(() => {
        console.log('Llamar a mi API - ', subtitle);
    }, [subtitle]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl fondt-thin text-white">MemoApp</h1>
            <MyTitle title={title} />
            <MySubtitle subtitle={subtitle} callMyAPi={handleMyApiCall} />

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                // onClick={() => setTitle('Hello, ' + new Date().getTime())}
                onClick={() => setTitle('Hello')}
            >
                Cambiar título
            </button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                // onClick={() => setSubtitle('Word, ' + new Date().getTime())}
                onClick={() => setSubtitle('Word')}
            >
                Cambiar subtítulo
            </button>
        </div >
    )
}