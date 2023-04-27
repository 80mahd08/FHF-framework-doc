import codeCopyLogo from '../../../../public/copy-regular.svg';

export default function Code({ children }: { children: string } ) {
    function copyToClipboard(text: string): void {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch((error) => {
                console.error('Error copying text: ', error);
            });
    }
    return (
        <div className="code">
            <code>{children}</code>
            <span
                className="codeCopyLogo"
                onClick={() => copyToClipboard(children)}
            >
                <img src={codeCopyLogo} alt="codeCopyLogo" />
            </span>
        </div>
    );
}
