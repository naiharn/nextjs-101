"use client"
import Image from "next/image"
import TextField from '@mui/material/TextField';

export default function page() {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-gray-200" >
            <div className="flex flex-col justify-evenly rounded-xl shadow-md w-[450px] h-[620px] bg-white">
                <div className="flex justify-center item-center h-[100%] ">
                    <div className="flex justify-center items-center flex-col gap-8">
                        <h6 className="font-sans text-3xl font-extrabold">Welcome naiharn</h6>
                        <Image className="hover:w-24" alt=" " src="next.svg" width={100} height={100} />
                    </div>
                </div>
                
                <div className="h-[100%]  flex  flex-col gap-4 items-center">
                    
                        <TextField className="w-[270px]" id="standard-basic" label="Email" variant="standard" />
                        <TextField className="w-[270px]"
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                    
                </div>
                
                <div className="h-[100%] border-2 border-blue-500 ">
                    asdf
                </div>
            </div>
        </div>
    )
}
