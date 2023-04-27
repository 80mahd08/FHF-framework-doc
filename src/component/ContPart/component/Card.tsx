type cardProps = {
    logo: string;
    title: string;
    disc: string;
};

export default function Card({ logo, title, disc }: cardProps) {
    return (
        <a style={{ display: 'block' }} className="card">
            <div className="cardHeader">
                <span style={{display: "block"}} className="logo">
                    <img src={logo} alt="logo" />
                </span>
                <h3>{title}</h3>
            </div>
            <div className="cardBody">
                <p>{disc}</p>
            </div>
        </a>
    );
}
