import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import InputComponent from "@/components/AuthInput";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import ButtonSubmit from "@/components/ButtonSubmit";
import Link from "next/link";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const stateStore = useAppSelector((state) => state.auth.username);


    const dispatch = useAppDispatch()

    return (
        <div className="h-screen flex flex-col items-center justify-center max-w-11/12">
            <div className="flex justify-end w-full">
                <ToggleDarkMode />
            </div>
            <div className="flex-1 mt-20">
                <div className="mx-auto w-fit">
                    <p className="text-4xl font-extrabold text-bluePrimary dark:text-orangePrimary">
                        Silahkan LogIn
                    </p>
                    <p className="text-gray-600 text-sm mt-6">
                        Masukkan Username dan password anda untuk masuk
                    </p>
                    <form className="mt-8">
                    <InputComponent name="username" type="text" placeholder="Username anda ..." value={username} onChange={(e) => setUsername(e.target.value)} />
                    <InputComponent name="password" type="password" placeholder="Password anda ..." value={password} onChange={e => setPassword(e.target.value)} />
                    <div className="mt-10">
                        <ButtonSubmit value="Masuk Sekarang" />
                    </div>
                    </form>

                    <p className="text-greyPrimary text-center mt-6 font-bold mb-12">
                        Belum punya akun? 
                        <Link href="/accounts/register" className="text-bluePrimary dark:text-orangePrimary">Daftar Sekarang</Link> 
                    </p>
                </div>
            </div>
        </div>
    )
}