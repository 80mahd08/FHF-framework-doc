import { Link } from 'react-router-dom';

interface leftPartPropsType {
    shownLink: boolean;
}

export default function LeftPart({ shownLink }: leftPartPropsType) {
    return (
        <div className="leftPart">
            {shownLink ? (
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h1 className="respH1 marginTop-10 marginBottom-10">Fhf</h1>
                </Link>
            ) : (
                <h1 className="respH1 marginTop-10 marginBottom-10">Fhf</h1>
            )}
        </div>
    );
}
