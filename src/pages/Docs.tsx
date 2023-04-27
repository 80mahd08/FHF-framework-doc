import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import up from '../../public/angle-up-solid.svg';
import down from '../../public/angle-down-solid.svg';

export default function Docs({showNav , setShowNav}:{showNav:number;setShowNav:any}) {
    const [upOrDown, setUpOrDown] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes('usage')) {
            setUpOrDown(true);
        }
    }, [location]);
    return (
        <>
            <nav
                style={{ display: showNav%2===0 ? 'block' : 'none'  }}
            >
                <ul className="unstyledList">
                    <li>
                        <NavLink
                            className="mainLink"
                            to="/docs/introduction"
                            style={({ isActive }) => ({
                                borderLeft: isActive
                                    ? '5px solid #a3759c'
                                    : '5px solid #f1c5ea',
                            })}
                            onClick={() => setUpOrDown(false)}
                        >
                            Introduction
                        </NavLink>
                    </li>
                </ul>
                <ul className="unstyledList">
                    <li>
                        <NavLink
                            className="mainLink"
                            to="/docs/installation"
                            style={({ isActive }) => ({
                                borderLeft: isActive
                                    ? '5px solid #a3759c'
                                    : '5px solid #f1c5ea',
                            })}
                            onClick={() => setUpOrDown(false)}
                        >
                            Installation
                        </NavLink>
                    </li>
                </ul>
                <ul className="unstyledList">
                    <li>
                        <NavLink
                            className="mainLink lastLink"
                            to="/docs/usage"
                            style={({ isActive }) => ({
                                borderLeft: isActive
                                    ? '5px solid #a3759c'
                                    : '5px solid #f1c5ea',
                            })}
                            onClick={() => setUpOrDown(true)}
                        >
                            Usage
                            {upOrDown ? (
                                <span>
                                    <img src={down} alt="angle up" />
                                </span>
                            ) : (
                                <span>
                                    <img src={up} alt="angle down" />
                                </span>
                            )}
                        </NavLink>
                    </li>
                </ul>
                {upOrDown ? (
                    <div className="usageList">
                        <ul className="unstyledList">
                            <li>
                                <a
                                    className="cssClasses"
                                    href="#getting-started"
                                >
                                    Getting Started
                                </a>
                            </li>
                            <li>
                                <a className="cssClasses" href="#css-classes">
                                    CSS Classes
                                </a>
                            </li>
                            <li>
                                <ul className="unstyledList">
                                    <li>
                                        <a href="#colors">Colors</a>
                                    </li>
                                    <li>
                                        <a href="#background-colors">
                                            Background Colors
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#border">Border</a>
                                    </li>
                                    <li>
                                        <a href="#positioning">
                                            Positioning Classes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#text">Text Classes</a>
                                    </li>
                                    <li>
                                        <a href="#grid">Grid Classes</a>
                                    </li>
                                    <li>
                                        <a href="#margin">Margin Classes</a>
                                    </li>
                                    <li>
                                        <a href="#padding">Padding Classes</a>
                                    </li>
                                    <li>
                                        <a href="#flexBox">Flexbox Classes</a>
                                    </li>
                                    <li>
                                        <a href="#float">Float Classes</a>
                                    </li>
                                    <li>
                                        <a href="#imgVideo">
                                            Image and Video Classes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#container">
                                            container classes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#visibility">
                                            visibility classes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#borderRadius">
                                            border Radius classes
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                ) : (
                    ''
                )}
            </nav>
        </>
    );
}
