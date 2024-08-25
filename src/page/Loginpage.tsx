import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
const Loginpage = () => {
    interface LoginInput {
        email: string
        password: string
    }

    // yup schema
    const schema = yup.object().shape({
        email: yup
            .string()
            .required('Email is a required field')
            .email('Invalid email format'),
        password: yup
            .string()
            .required('Password is a required field')
            .min(8)
            .max(12),
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({ resolver: yupResolver(schema) })

    const onSubmit = (data: LoginInput) => {
        console.log(data)
    }
    return (
        <div className="mx-auto py-40 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col justify-center items-center max-w-[500px] gap-5 mx-auto">
                    <div className="text-[45px] font-extrabold text-[#0565bb]">
                        Welcome!
                    </div>
                    <hr className="w-full border-2 text-black bg-black h-1 my-6"></hr>
                    <div className="space-y-3 w-full">
                        <input
                            type="text"
                            className="border-2 w-full h-[50px] placeholder:p-2"
                            placeholder="아이디 (이메일)"
                            {...register('email')}
                        />
                        {errors.email && (
                            <p className="border border-t-0 border-red-400 rounded-b bg-red-100 px-1 py-2 text-red-700">
                                {errors.email.message}
                            </p>
                        )}
                        <input
                            className="border-2 w-full h-[50px] placeholder:p-2"
                            type="password"
                            placeholder="비밀번호"
                            {...register('password')}
                        />
                        {errors.password && (
                            <p className="border border-t-0 border-red-400 rounded-b bg-red-100 px-1 py-2 text-red-700">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full">
                        <button className="bg-[#0565bb] px-4 py-2 w-full text-white">
                            로그인하기
                        </button>
                    </div>

                    <div className="mt-20 text-[16px] font-bold">
                        <button>SNS 계정으로 로그인</button>
                    </div>
                    <div className="flex mt-5 justify-between items-center w-full">
                        <img src="src\img\login\naver-icon.png" alt="" />
                        <img src="src\img\login\kakao-icon.png" alt="" />
                        <img src="src\img\login\facebook-icon.png" alt="" />
                        <img src="src\img\login\google-icon.png" alt="" />
                    </div>
                    <div className="mt-20 w-full">
                        <button className="border-2 border-black w-full px-4 py-2 text-[16px] font-bold">
                            <Link to={'/register'}>
                                계정이 없으신가요? 간편가입하기
                            </Link>
                        </button>
                    </div>
                    <div className="flex justify-around items-center w-full">
                        <div className="text-[#1a58f2]">아이디(이메일)찾기</div>
                        <div className="text-[#1a58f2]">비밀번호 찾기</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Loginpage
