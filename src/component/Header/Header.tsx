import LeftPart from './component/LeftPart';
import RightPart from './component/RightPart';
import SearchBar from '../SearchBar/SearchBar';

interface HeaderPropsType {
  shown:boolean;
  setShowNav: React.Dispatch<React.SetStateAction<number>>;
  showNav: number;
}

export default function Header( { shown , setShowNav , showNav   }: HeaderPropsType ){
  return (
    <header>
      {shown && (
        <div className={`navLogo ${showNav % 2 === 0 ? 'ex' : 'def'}`} id={`navLogo`} onClick={() => {setShowNav(showNav + 1) } } >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <LeftPart shownLink={shown} />
      {shown && <SearchBar />}
      <RightPart />
    </header>
  );
}
