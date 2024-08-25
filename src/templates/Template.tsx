import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './template.css'
const Template = () => {
    return (
        <div>
            <header className="mx-auto box flex justify-between items-center">
                <div className="header-left">
                    <img src="./src/img/logo.svg" alt="" />
                </div>
                <div className="header-right flex flex-row-end  flex-nowrap justify-between w-1/2 text-white">
                    <div className="Introduction">Introduction</div>
                    <div className="solution">solution</div>
                    <div className="Rate-plan">Rate plan</div>
                    <div>|</div>
                    <div>
                        <Link to={'/login'}>login</Link>
                    </div>
                    <div className="Apply-for-free-use">Apply for free use</div>
                </div>
            </header>
            <Outlet />
            <footer className="">
                <hr className="w-[90%] mx-auto"></hr>
                <div className="flex justify-between w-full p-10">
                    <div>
                        <span className="font-bold text-[14px]">
                            what happened
                        </span>
                        <div className="mt-6">
                            <ul className="text-[14px] space-y-1">
                                <li>
                                    [공지] 개인 정보 처리 방침 변경 사전 안내
                                </li>
                                <li>[공지] 29CM 강남 스토어 영업 종료</li>
                                <li>
                                    [공지] 개인 정보 처리 방침 변경 사전 안내
                                </li>
                                <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
                                <li>
                                    [공지] 개인 정보 처리 방침 변경 사전 안내
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" flex justify-around gap-20">
                        <div>
                            <span className="font-bold text-[14px]">
                                about us
                            </span>
                            <div className="mt-6">
                                <ul className="text-[14px] space-y-1">
                                    <li>회사 소개</li>
                                    <li>인재 채용</li>
                                    <li>상시 할인 혜택</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-[14px]">
                                my order
                            </span>
                            <div className="mt-6">
                                <ul className="text-[14px] space-y-1">
                                    <li>내 주문</li>
                                    <li>주문 배송</li>
                                    <li>취소 / 교환 / 반품 내역</li>
                                    <li>상품 리뷰 내역</li>
                                    <li>증빙 서류 발급</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-[14px]">
                                my account
                            </span>
                            <div className="mt-6">
                                <ul className="text-[14px] space-y-1">
                                    <li>회원 정보 수정</li>
                                    <li>회원 등급</li>
                                    <li>마일리지 현황</li>
                                    <li>쿠폰</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-[14px]">help</span>
                            <div className="mt-6">
                                <ul className="text-[14px] space-y-1">
                                    <li>1 : 1 상담 내역</li>
                                    <li>상품 Q & A 내역</li>
                                    <li>공지 사항</li>
                                    <li>자주하는 질문</li>
                                    <li>고객의 소리</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-[90%] mx-auto"></hr>
                <div className="flex justify-between w-full p-10">
                    <div className="">
                        © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 :
                        홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ
                        test0101@what happened.co.kr 서울특별시 강남구 도산대로
                        8길 17 ｜ FAX : 070-0000-0000 l 서비스 이용약관 l
                        개인정보처리방침
                    </div>
                    <div className="w-full flex justify-end items-center gap-6">
                        <img src="src\img\footer\snsicon-01.png" alt="" />
                        <img src="src\img\footer\snsicon-02.png" alt="" />
                        <img src="src\img\footer\snsicon-03.png" alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Template
