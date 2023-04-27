import Header from './component/Header/Header';
import SearchPart from './component/SearchPart/SearchPart';
import ContPart from './component/ContPart/ContPart';
import Footer from './component/Footer/Footer';
import { SetStateAction } from 'react';

function App() {
    return (
        <>
            <Header shown={false} setShowNav={function (value: SetStateAction<number>): void {
                throw new Error('Function not implemented.');
            } } showNav={0} />
            <SearchPart />
            <ContPart />
            <Footer />
        </>
        
    );
}

export default App;
