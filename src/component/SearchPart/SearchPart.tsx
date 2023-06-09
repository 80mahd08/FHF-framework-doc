import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function SearchPart() {
    const [searchInput, setSearchInput] = useState('');
    const [displaySearchOutput, setDisplaySearchOutput] = useState(false);
    let links = [
        { name: 'installation', link: '/docs/installation', aTag: false },
        { name: 'introduction', link: '/docs/introduction', aTag: false },
        { name: 'usage', link: '/docs/usage', aTag: false },
        {
            name: 'getting started',
            link: '/docs/usage#getting-started',
            aTag: true,
        },
        { name: 'css classes', link: '/docs/usage#css-classes', aTag: true },
        { name: 'color', link: '/docs/usage#colors', aTag: true },
        {
            name: 'background Colors',
            link: '/docs/usage#background-colors',
            aTag: true,
        },
        { name: 'border', link: '/docs/usage#border', aTag: true },
        {
            name: 'positioning Classes',
            link: '/docs/usage#positioning',
            aTag: true,
        },
        { name: 'text classes', link: '/docs/usage#text', aTag: true },
        { name: 'grid Classes', link: '/docs/usage#grid', aTag: true },
        { name: 'margin Classes', link: '/docs/usage#margin', aTag: true },
        { name: 'padding Classes', link: '/docs/usage#padding', aTag: true },
        { name: 'flexbox Classes', link: '/Docs/usage#flexBox', aTag: true },
        { name: 'float Classes', link: '/Docs/usage#float', aTag: true },
        { name: 'image and video classes', link: '/Docs/usage#imgVideo', aTag: true }, 
        { name: 'container classes', link: '/docs/usage#container', aTag: true },
        { name: 'visibility classes', link: '/docs/usage#visibility', aTag: true },
        { name: 'border radius', link: '/docs/usage#borderRadius', aTag: true },
    ];    
    const [searchOutput, setSearchOutput] = useState<
        Array<{ name: string; link: string; aTag: boolean }>
    >([]);
    useEffect(() => {
        const find = () => {
            var filtering = new RegExp(searchInput, 'i');
            return links.filter((ele) => ele.name.match(filtering));
        };
        setSearchOutput(find());
        if (searchInput === '') {
            setDisplaySearchOutput(false);
        } else {
            setDisplaySearchOutput(true);
        }
    }, [searchInput]);

    return (
        <div className="SearchPart">
            <div className="container">
                <h1>FHF</h1>
                <p>
                    CSS frameworks can save developers time and effort because
                    they provide a consistent and customizable base for building
                    websites or applications
                </p>
                <div className="search">
                    <input
                        placeholder="Search the docs..."
                        type="text"
                        onChange={(event) => {
                            setSearchInput(event.target.value);
                        }}
                        onBlur={() => {
                            setTimeout(() => {
                                setDisplaySearchOutput(false);
                            }, 200);
                        }}
                        onFocus={() => {
                            if (searchInput === '') {
                                setDisplaySearchOutput(false);
                            } else {
                                setDisplaySearchOutput(true);
                            }
                        }}
                    />
                    {displaySearchOutput && (
                        <div className="searchDisplay">
                            <ul className="unstyledList">
                                {searchOutput.map((ele, key) => {
                                    return (
                                        <li key={key}>
                                            {ele.aTag ? (
                                                <a href={ele.link}>
                                                    {ele.name}
                                                </a>
                                            ) : (
                                                <Link to={ele.link}>
                                                    {ele.name}
                                                </Link>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="SqBg">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
