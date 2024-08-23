import React from 'react'
import { Outlet } from 'react-router-dom'
import './template.css'
const Template = () => {
    return (
        <div>
            <header className='mx-auto box flex justify-between items-center'>
                <div className="header-left">
                    <img src="./src/img/logo.svg" alt="" />
                </div>
                <div className="header-right flex flex-row-end  flex-nowrap justify-between w-1/2 text-white">
                    <div className="Introduction">
                        Introduction
                    </div>
                    <div className="solution">
                        solution
                    </div>
                    <div className="Rate-plan">
                        Rate plan
                    </div>
                    <div>|</div>
                    <div className="login">
                        login
                    </div>
                    <div className="Apply-for-free-use">
                        Apply for free use
                    </div>
                </div>
            </header>
            <Outlet />
            <footer>footer</footer>
        </div>
    )
}

export default Template