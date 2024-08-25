import React from 'react'
import './mainpage.css'
import heart from '../img/mainpage/listitem/hearticon.svg'
const Mainpage = () => {
    interface listBestProductProps {
        intro: number
        imgItem: number
        des: string
    }
    interface listItemProps {
        imgNumber: string
    }
    const listBestProduct: listBestProductProps[] = [
        {
            intro: 1,
            imgItem: 1,
            des: 'How to create mobile-optimized',
        },
        {
            intro: 2,
            imgItem: 2,
            des: 'How to create mobile-optimized',
        },
        {
            intro: 3,
            imgItem: 3,
            des: 'How to create mobile-optimized',
        },
    ]
    const listItems: listItemProps[] = [
        { imgNumber: '01' },
        { imgNumber: '02' },
        { imgNumber: '03' },
        { imgNumber: '04' },
        { imgNumber: '05' },
        { imgNumber: '06' },
        { imgNumber: '07' },
        { imgNumber: '08' },
        { imgNumber: '09' },
        { imgNumber: '10' },
        { imgNumber: '11' },
        { imgNumber: '12' },
        { imgNumber: '13' },
        { imgNumber: '14' },
        { imgNumber: '15' },
        { imgNumber: '16' },
        { imgNumber: '17' },
        { imgNumber: '18' },
        { imgNumber: '19' },
        { imgNumber: '20' },
        { imgNumber: '21' },
        { imgNumber: '22' },
        { imgNumber: '23' },
        { imgNumber: '24' },
        { imgNumber: '25' },
    ]

    return (
        <div>
            {/* banner */}
            <div className="main_banner h-full text-center bg-[#ea4913]">
                <img
                    src="./src/img/mainpage/main-banner.png"
                    srcSet="./src/img/mainpage/main-banner@2x.png 2x,
             ./src/img/mainpage/main-banner@3x.png 3x"
                    className="main_banner mx-auto"
                ></img>
            </div>

            {/* introduction */}
            <div className="introduction_bg">
                <div className="pl-[174px] pt-[174px] text-white ">
                    <span className="text-[50px] uppercase font-bold">
                        what happened
                    </span>

                    <div className="pt-[50px] text-[20px] w-[667px]">
                        How to create mobile-optimized videos in minutes. Not a
                        designer, every team makes a lot of videos Can be
                        trimmed. Take the first step to your brand's success.
                        How to create mobile-optimized videos in minutes.
                    </div>
                </div>
            </div>

            {/* best product */}
            <div className="bg-[#fcd425]  px-[174px] py-24 ">
                <span className="Best-Product flex justify-center text-[50px] uppercase font-bold text-[#f96400]">
                    Best Product
                </span>
                <span className="flex justify-center text-[20px] text-[#f96400] text-center w-full min-w-[667px] px-auto">
                    How to create mobile-optimized videos in minutes. Not a
                    designer, every team makes a lot of videos Can be trimmed.
                    Take the first
                </span>
                <div className="flex justify-center mt-20">
                    {listBestProduct.map((item: listBestProductProps) => {
                        return (
                            <div className="relative">
                                <div className="box-top absolute top-[-49px] left-0">
                                    <img
                                        src={`./src/img/mainpage/bestproduct/producticon-0${item.intro}.png`}
                                        alt=""
                                    />
                                </div>
                                <img
                                    src={`./src/img/mainpage/bestproduct/best-image-0${item.imgItem}.png`}
                                    alt=""
                                />
                                <div
                                    className="z-10 overflow-auto bg-white border-[3px]  border-black rounded-md flex justify-around 
                                    items-center 
                                min-w-[100px] mx-6 translate-y-[-20px] p-2"
                                >
                                    <div className=" font-bold">{item.des}</div>
                                    <img
                                        src="./src/img/mainpage/bestproduct/go-icon.png"
                                        alt=""
                                        className="w-10 h-10"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* items */}
            <div className="px-[174px] h-auto pt-20">
                <div className="grid grid-cols-5 gap-x-4 gap-y-12">
                    {listItems.map((item: listItemProps) => {
                        return (
                            <div className="">
                                <img
                                    src={`./src/img/mainpage/listitem/img-${item.imgNumber}.png`}
                                    alt=""
                                />
                                <div className="my-4">
                                    [what happen] How to create
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="-won">2,500 won</span>
                                    <span className="flex">
                                        <img
                                            src={heart}
                                            alt=""
                                            className="mr-1"
                                        />
                                        236
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center py-20">
                    <div className="border-[3px] border-black w-[200px] h-[60px] uppercase font-bold rounded-md items-center justify-center flex">
                        see more
                    </div>
                </div>
            </div>

            {/* brand story */}
            <div className="bg-[#0065bc] py-40 relative min-w-full">
                <div className="flex flex-col gap-6 w-full h-full items-center overflow-x-hidden">
                    <span className="Best-Product flex justify-center text-[45px] uppercase font-bold text-[#fcd425]">
                        Brand Story
                    </span>
                    <span className="flex justify-center text-[16px] text-[#fcd425] text-center max-w-[500px] min-w-[667px] px-auto">
                        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                        디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다.
                        브랜드의 성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단
                        몇 분 만에 제작해보세요.
                    </span>
                    <div className="relative">
                        <div className="relative z-40">
                            <img
                                src="./src/img/mainpage/bandstory/window.png"
                                alt="bandstory"
                                className="h-full"
                            />
                        </div>

                        <div className="absolute top-[15%] left-1/2 z-50">
                            <span className="text-[30px] uppercase font-bold">
                                What Happened’s Brand story
                            </span>

                            <div className="pt-[20px] text-[16px] w-[500px]">
                                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디
                                모래뿐일 무엇을 풀이 옷을 봄바람이다. 새 천고에
                                놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다.
                                수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
                                이상 할지라도 피다. 피부가 불러 피고 인간의
                                타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의
                                못할 것은 목숨을 수 그들을 아름답고 고행을 끝에
                                설산에서 황금시대를 이상을 운다.
                            </div>

                            <div className="flex justify-start pt-[40px]">
                                <div className="border-[3px] border-black w-[200px] h-[60px] uppercase font-bold rounded-md items-center justify-center flex">
                                    see more
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-[20%] -left-[28%] min-w-screen">
                            <div className="">
                                <img
                                    src="./src/img/mainpage/bandstory/object-06.png"
                                    alt="books-picture"
                                    className="inline-block"
                                />
                                <img
                                    src="./src/img/mainpage/bandstory/object-07.png"
                                    alt="book-picture"
                                    className="inline-block mt-20"
                                />
                            </div>
                        </div>

                        <div className="absolute z-20 top-[45%] -right-[28%] flex justify-between min-w-screen">
                            <div className="relative">
                                <img
                                    src="./src/img/mainpage/bandstory/object-05.png"
                                    alt="books-picture"
                                    className=" inline-block"
                                />
                                <img
                                    src="./src/img/mainpage/bandstory/object-04.png"
                                    alt="book-picture"
                                    className="absolute -top-[300px] -right-[100px] inline-block -z-10"
                                />
                            </div>
                        </div>

                        <div className="absolute -top-[35%] -left-[12%] z-20  flex justify-between">
                            <img
                                src="./src/img/mainpage/bandstory/object-01.png"
                                alt="notepaper"
                            />
                        </div>

                        <div className="absolute -top-[55%] -right-[10%] z-20 flex justify-between">
                            <img
                                src="./src/img/mainpage/bandstory/object-02.png"
                                alt="notepaper"
                                className="relative"
                            />

                            <img
                                src="./src/img/mainpage/bandstory/object-03.png"
                                alt="notepaper"
                                className="absolute -right-20 top-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* happend's issue */}
            <div className="bg-[#fccb05] py-40 flex flex-col gap-8 items-center">
                <div className="uppercase font-bold text-[45px]">
                    Happened’s issue
                </div>
                <div className="text-[16px] max-w-[800px] text-center">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                    디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다.
                    브랜드의 성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇
                    분 만에 제작해보세요.
                </div>

                <div className="border-[3px] border-black w-[200px] h-[60px] uppercase font-bold rounded-md items-center justify-center flex">
                    see more
                </div>
                <div className="bg-black w-full h-full grid grid-cols-5">
                    <div className="inline-block bg-[#f50] w-full relative">
                        <div className="flex flex-col ">
                            <div className="whpn-issue text-black font-bold text-[55px]  uppercase text-center leading-[1.04] p-6">
                                whpn <br /> issue
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="./src/img/mainpage/issue/news-img-01.png"
                                    alt=""
                                    width={150}
                                    className=""
                                />
                            </div>
                        </div>

                        <div className="absolute -bottom-[15%] -right-[5%]">
                            <img
                                src="./src/img/mainpage/issue/news-object-03.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="inline-block w-full">
                        <div className="relative">
                            <div className="font-bold text-white uppercase text-[30px] text-center w-auto">
                                b brand
                            </div>
                            <div className="absolute -top-[75%] left-[3%] ">
                                <img
                                    src="./src/img/mainpage/issue/news-object-04.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <img
                            src="./src/img/mainpage/issue/news-img-05.png"
                            alt=""
                            className="w-full"
                        />
                    </div>
                    <div className="inline-block">
                        <div>
                            <div className="font-bold text-white uppercase text-[30px] text-center w-auto">
                                c brand
                            </div>
                        </div>
                        <img
                            src="./src/img/mainpage/issue/news-img-03.png"
                            alt=""
                            className="w-full"
                        />
                    </div>
                    <div className="inline-block relative">
                        <div className="bg-[#f50]">
                            <div className="font-bold text-white uppercase text-[30px] text-center w-auto">
                                d brand
                            </div>
                        </div>
                        <img
                            src="./src/img/mainpage/issue/news-img-04.png"
                            alt=""
                            className="w-full"
                        />

                        <div className="absolute -bottom-[10%] -right-[5%]">
                            <img
                                src="./src/img/mainpage/issue/news-object-05.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="inline-block">
                        <div>
                            <div className="font-bold text-white uppercase text-[30px] text-center w-auto">
                                e brand
                            </div>
                        </div>
                        <img
                            src="./src/img/mainpage/issue/news-img-05.png"
                            alt=""
                            className="w-full"
                        />
                    </div>
                </div>
            </div>

            {/* what happend */}
            <div className=" flex flex-col gap-8 items-center relative ">
                <div className="flex flex-col gap-6 w-full h-full items-center overflow-hidden">
                    <span className="Best-Product flex justify-center text-[50px] uppercase font-bold">
                        what happened
                    </span>
                    <span className="flex justify-center text-[20px] text-center max-w-[500px] min-w-[667px] px-auto">
                        How to create mobile-optimized videos in minutes. Not a
                        designer, every team makes a lot of videos Can be
                        trimmed. Take the first
                    </span>

                    <div className="flex justify-start">
                        <div className="border-[3px] border-black w-[200px] h-[60px] uppercase font-bold rounded-md items-center justify-center flex">
                            see more
                        </div>
                    </div>
                    <div className="relative mb-80">
                        <div className="relative z-40">
                            <img
                                src="./src/img/mainpage/brand-video/video.png"
                                alt="bandstory"
                                className="h-full"
                            />
                        </div>
                        <div className="absolute -bottom-[30%] left-0 min-w-screen">
                            <div className="relative">
                                <img
                                    src="./src/img/mainpage/brand-video/video-object-01.png"
                                    alt="books-picture"
                                    className="inline-block"
                                />
                                <img
                                    src="./src/img/mainpage/brand-video/video-object-03.png"
                                    alt="book-picture"
                                    className="inline-block absolute -top-[40%] -left-[30%] -z-10"
                                />
                            </div>
                        </div>
                        <div className="absolute z-20 top-[60%] -right-[42%] flex justify-between min-w-screen">
                            <div className="relative">
                                <img
                                    src="./src/img/mainpage/brand-video/video-object-08.png"
                                    alt="books-picture"
                                    className=" inline-block"
                                />
                                <img
                                    src="./src/img/mainpage/brand-video/video-object-09.png"
                                    alt="book-picture"
                                    className="absolute -top-[280px] right-10 inline-block -z-10"
                                />
                            </div>
                        </div>
                        <div className="absolute -left-1/2 -top-[15%]">
                            <img
                                src="./src/img/mainpage/brand-video/video-object-04.png"
                                alt="notepaper"
                            />
                        </div>
                        <div className="absolute -top-[35%] -right-[20%] z-20 flex justify-between">
                            <img
                                src="./src/img/mainpage/brand-video/video-object-07.png"
                                alt="notepaper"
                                className="relative"
                            />

                            <img
                                src="./src/img/mainpage/brand-video/video-object-06.png"
                                alt="notepaper"
                                className="absolute -left-20 top-[70%]"
                            />
                        </div>
                        <div className="absolute -bottom-[15%] right-[30%] min-w-screen">
                            <img
                                src="./src/img/mainpage/brand-video/video-object-02.png"
                                alt="books-picture"
                                className="inline-block"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-[10%]">
                    <img
                        src="./src/img/mainpage/brand-video/video-object-05.png"
                        alt="bandstory"
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Mainpage
