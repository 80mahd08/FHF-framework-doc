import githubLogo from '/github.svg';
import instLogo from '/instagram.svg';

export default function RightPart() {
    return (
        <div className="rightPart">
            <a href="https://github.com/80mahd08">
                <img className='githubLogo' src={githubLogo} />
            </a>
            <a href="https://www.instagram.com/80mahd08/">
                <img className='instLogo' src={instLogo} />
            </a>
        </div>
    );
}
