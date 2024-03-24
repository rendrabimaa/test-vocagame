import { toggleDarkMode } from "@/redux/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";


const ToggleDarkMode:React.FC = () => {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);


    useEffect(() => {
        console.log(isDarkMode)
    }, [isDarkMode])


    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode())
    }

    return (
        <div className="flex items-center gap-1 font-bold text-xs">
            <label
            className="inline-block hover:cursor-pointer"
            htmlFor="flexSwitchCheckDefault">
                Blue
            </label>
            <div className="border-2 border-black rounded-full p-2 w-fit">
                <input
                    className=" h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-blue-500 after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault" 
                    checked={isDarkMode}
                    onChange={handleToggleDarkMode}
                />
            </div>
            <label
            className="inline-block ps-[0.15rem] hover:cursor-pointer dark:text-red-500"
            htmlFor="flexSwitchCheckDefault">
                Orange
            </label>
        </div>
    )
}

export default ToggleDarkMode