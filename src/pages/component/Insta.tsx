import Code from './component/Code'
export default function Insta() {

    return (
        <div className="insta DocsContPart padding-35">
            <div className="title">
                <h1 className="respH1">Installation</h1>
            </div>
            <div>
                <h2 className="respH2">step 1: Install node.js</h2>
                <p>
                    In order to install FHF, you must have Node.js installed on
                    your system. To download and install Node.js, you can simply
                    click on this button provided
                </p>
                <a href="https://nodejs.org/en/download" target="_blank">
                    Install Node.js
                </a>
                <p>
                    This button will take you to the official Node.js download
                    website, where you can download and install the latest
                    version of Node.js for your operating system.
                </p>
                <p className="respP">
                    To ensure that Node.js is properly installed on your system,
                    you can run this command :
                </p>
                <Code>node -v</Code>
                <p className="respP">
                    This will display the version number of Node.js currently
                    installed on your system. Similarly, to check the version of
                    npm installed on your system, you can run this command :
                </p>
                <Code>npm -v</Code> 
                <h2 className="respH2">step 2: Install FHF</h2>
                <p className="respP">
                    Once you have Node.js installed on your system, you can
                    proceed with the installation of FHF by running the npm
                    installation command. This can be done by opening a command
                    prompt or terminal window and typing :
                </p>
                <Code>npm install fhf</Code>
                <p className="respP">
                    This command will download and install the FHF CSS framework
                    onto your system.
                </p>
            </div>
        </div>
    );
}
