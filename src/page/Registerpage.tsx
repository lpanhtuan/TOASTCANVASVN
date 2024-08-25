import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Registerpage = () => {
    interface IFormInput {
        email: string
        address: string
        password: string
        passwordMatch?: string
        phone: number
    }

    // yup schema
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email format')
            .required('Email is a required field'),
        address: yup.string().required('Address is a required field'),
        password: yup
            .string()
            .min(8)
            .max(12)
            .required('Password is a required field'),
        passwordMatch: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords must match'),
        phone: yup
            .number()
            .min(1)
            .max(11, 'Phone number should not exceed 11 digits')
            .required('Phone is a required field'),
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({ resolver: yupResolver(schema) })

    const onSubmit = (data: IFormInput) => {
        console.log(data)
    }
    return (
        <div className="mx-auto py-40 ">
            <div className="flex flex-col justify-center items-center max-w-[500px] gap-1 mx-auto">
                <div className="text-[45px] font-extrabold text-[#0565bb] uppercase">
                    join us!
                </div>
                <hr className="w-full border-2 text-black bg-black h-1 my-6"></hr>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-8 w-full">
                        <div className="">
                            <label htmlFor="email">아이디(이메일) *</label>
                            <input
                                type="text"
                                id="email"
                                className="border-2 w-full h-[50px] placeholder:p-2"
                                placeholder="example@email.com"
                                {...register('email')}
                            />
                            {errors.email && (
                                <p className="border border-t-0 border-red-400 rounded-b bg-red-100 px-1 py-2 text-red-700">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="">
                            <label htmlFor="password">비밀번호 *</label>
                            <input
                                id="password"
                                className="border-2 w-full h-[50px] placeholder:p-2"
                                type="password"
                                placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
                                {...register('password')}
                            />
                            {errors.password && (
                                <p className="border border-t-0 border-red-400 rounded-b bg-red-100 px-1 py-2 text-red-700">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div className="">
                            <label htmlFor="passwordMatch">
                                비밀번호 확인 *
                            </label>
                            <input
                                id="passwordMatch"
                                className="border-2 w-full h-[50px] placeholder:p-2"
                                type="password"
                                {...register('passwordMatch')}
                            />
                            {errors.passwordMatch && (
                                <p className="border border-t-0 border-red-400 rounded-b bg-red-100 px-1 py-2 text-red-700">
                                    {errors.passwordMatch.message}
                                </p>
                            )}
                        </div>

                        <div className="">
                            <label htmlFor="address">주소*</label>
                            <div className="relative">
                                <input
                                    id="address"
                                    className="border-2 w-full h-[50px] placeholder:p-2 "
                                    type="password"
                                    {...register('address')}
                                />
                                {errors.address && (
                                    <p className="border border-t-0 border-red-400 rounded-b bg-red-100 px-1 py-2 text-red-700">
                                        {errors.address.message}
                                    </p>
                                )}
                                <button className="absolute right-[10px] top-[25%] text-[#659bf5]">
                                    검색
                                </button>
                            </div>
                            <input
                                id="passwordMatch"
                                className="border-2 mt-3 w-full h-[50px] placeholder:p-2 "
                                type="password"
                                placeholder="추가 주소"
                            />
                        </div>

                        <div className="">
                            <label htmlFor="phone">연락처</label>
                            <input
                                id="phone"
                                className="border-2 w-full h-[50px] placeholder:p-2"
                                type="tel"
                                {...register('phone')}
                            />
                            {errors.phone && (
                                <p className="border border-t-0 border-red-400 rounded-b bg-red-100 px-1 py-2 text-red-700">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <hr className="w-full border-2 text-black bg-black h-1 my-6"></hr>
                    <div className="w-full flex flex-col justify-between items-end">
                        <div className="">
                            <input
                                type="checkbox"
                                name="quality1"
                                id="quality1"
                                className="mr-2"
                            />
                            <label htmlFor="quality1">
                                <a href="#" className="text-blue-500">
                                    이메일{' '}
                                </a>
                                및
                                <a href="#" className="text-blue-500">
                                    {' '}
                                    개인정보 처리 방침
                                </a>{' '}
                                에 동의합니다. (필수)
                            </label>
                        </div>
                        <div className="">
                            <input
                                type="checkbox"
                                name="quality2"
                                id="quality2"
                                className="mr-2"
                            />
                            <label htmlFor="quality2">
                                광고 및 메일 수신에 동의합니다. (선택)
                            </label>
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <button
                            type="submit"
                            className="bg-[#0565bb] px-4 py-2 w-full text-white"
                        >
                            가입하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registerpage
