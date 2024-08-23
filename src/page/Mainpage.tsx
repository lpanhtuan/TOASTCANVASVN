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
                {/* <img src="./src/img/mainpage/introduction-bg.png"
          srcSet="./src/img/mainpage/introduction-bg@2x.png 2x,
             ./src/img/mainpage/introduction-bg@3x.png 3x"
          className="main_banner mx-auto"></img> */}
                {/* <div className="ml-[97px]"></div> */}
                <div className="pl-[174px] pt-[174px] text-white ">
                    <span className="text-[50px] uppercase font-bold">
                        {' '}
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
                                    className="z-10 overflow-auto bg-white border-2  border-black rounded-md flex justify-around 
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
                                        <img src={heart} alt="" />
                                        236
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center py-20">
                    <div className="border-2 border-black w-[200px] h-[60px] uppercase font-bold rounded-md items-center justify-center flex">
                        see more
                    </div>
                </div>
            </div>

            {/* brand story */}
            <div className="bg-[#0065bc] min-h-screen px-[174px] py-20">
                <span className="Best-Product flex justify-center text-[50px] uppercase font-bold text-[#fcd425]">
                    Brand Story
                </span>
                <span className="flex justify-center text-[20px] text-[#fcd425] text-center w-full min-w-[667px] px-auto">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                    디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다.
                    브랜드의 성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇
                    분 만에 제작해보세요.
                </span>
            </div>
        </div>
    )
}

export default Mainpage
