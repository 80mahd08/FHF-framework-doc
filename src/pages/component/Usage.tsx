import Code from './component/Code';

export default function Usage() {
    return (
        <div className="usage DocsContPart padding-35">
            <div className="title">
                <h1 className="respH1">Usage</h1>
            </div>
            <div>
                <h2 className="respH2" id="getting-started">
                    Getting Started
                </h2>
                <p className="respP">
                    To get started, you first need to include the CSS Framework
                    stylesheet in your HTML file:
                </p>
                <Code>{'<link rel="stylesheet" href="path/FHF.min.css">'}</Code>
                <p>or</p>
                <Code>{"import 'path/FHF.min.css'"}</Code>
                <p className="respP">
                    Once you have included the stylesheet, you can start using
                    the pre-designed CSS classes in your HTML elements. For
                    example:
                </p>
                <Code>{'<p class="respP">This is a text</p>'}</Code>
                <h2 className="respH2" id="css-classes">
                    CSS Classes
                </h2>
                <h3 className="respH3" id="colors">
                    Colors
                </h3>
                <p className="respP classes">
                    .fontBlack: Sets the font color to black. <br /> .fontWhite:
                    Sets the font color to white. <br /> .fontRed: Sets the font
                    color to red. <br /> .fontBlue: Sets the font color to blue.
                    <br /> .fontGreen: Sets the font color to green. <br />
                    .fontYellow: Sets the font color to yellow. <br />
                    .fontPurple: Sets the font color to purple. <br />
                    .fontPink: Sets the font color to pink. <br /> .fontOrange:
                    Sets the font color to orange. <br /> .fontGray: Sets the
                    font color to gray. <br />
                </p>
                <h3 className="respH3" id="background-colors">
                    Background Colors
                </h3>
                <p className="respP classes">
                    .bgBlack: Sets the background color to black. <br />
                    .bgWhite: Sets the background color to white. <br />
                    .bgRed: Sets the background color to red. <br />
                    .bgBlue: Sets the background color to blue. <br />
                    .bgGreen: Sets the background color to green. <br />
                    .bgYellow: Sets the background color to yellow. <br />
                    .bgPurple: Sets the background color to purple. <br />
                    .bgPink: Sets the background color to pink. <br />
                    .bgOrange: Sets the background color to orange. <br />
                    .bgGray: Sets the background color to gray. <br />
                    .transBg: Sets the background color to transparent. <br />
                </p>
                <h3 className="respH3" id="border">
                    Border
                </h3>
                <p className="respP disc">
                    * stand for border size(from 1 to 100)
                </p>
                <p className="respP classes">
                    .borderBlack-*: Sets the border to black. <br />
                    .borderWhite-*: Sets the border to white. <br />
                    .borderRed-*: Sets the border to red. <br />
                    .borderBlue-*: Sets the border to blue. <br />
                    .borderGreen-*: Sets the border to green. <br />
                    .borderYellow-*: Sets the border to yellow. <br />
                    .borderPurple-*: Sets the border to purple. <br />
                    .borderPink-*: Sets the border to pink. <br />
                    .borderOrange-*: Sets the border to orange. <br />
                    .borderGray-*: Sets the border to gray. <br />
                </p>
                <h3 className="respH3" id="positioning">
                    Positioning Classes
                </h3>
                <p className="respP classes">
                    .centerPosition: Centers an element both horizontally and
                    vertically on the page. <br />
                </p>
                <h3 className="respH3" id="text">
                    Text Classes
                </h3>
                <p className="respP disc">
                    _ in textDeco stand for text decoration style [ "none" , "underline" , "overline" , "lineThrough" ]<br />
                    _ in textTrans stand for text transform style [ "none" , "capitalize" , "uppercase" , "lowercase" ]<br />
                </p>

                <p className="respP classes">
                    .textCenter: Centers the text of an element. <br />
                    .textLeft: Aligns the text of an element to the left. <br />
                    .textRight: Aligns the text of an element to the right.{' '}
                    <br />
                    .respH1: Sets the font size of an h1 element to be
                    responsive to the screen size. <br />
                    .respH2: Sets the font size of an h2 element to be
                    responsive to the screen size. <br />
                    .respH3: Sets the font size of an h3 element to be
                    responsive to the screen size. <br />
                    .respH4: Sets the font size of an h4 element to be
                    responsive to the screen size. <br />
                    .respH5: Sets the font size of an h5 element to be
                    responsive to the screen size. <br />
                    .respH6: Sets the font size of an h6 element to be
                    responsive to the screen size. <br />
                    .respP: Sets the font size of a paragraph element to be
                    responsive to the screen size. <br />
                    .textDeco-_: Sets the text decoration of an element. <br />
                    .textTrans-_: Sets the text transform of an element. <br />
                </p>
                <h3 className="respH3" id="grid">
                    Grid Classes
                </h3>
                <p className="respP disc">
                    * stand for varying column widths(from 100 to 500)
                </p>
                <p className="respP classes">
                    .respGridFill-*: Creates a responsive grid with fixed column
                    widths. <br />
                    .respGridFit-*: Creates a responsive grid with flexible
                    column widths. <br />
                </p>
                <h3 className="respH3" id="margin">
                    Margin Classes
                </h3>
                <p className="respP disc">
                    * or ** stand for margin value(from 100 to 500) <br /> * in
                    respMargin stand for minimal margin value <br /> ** in
                    respMargin stand for maximal margin value
                </p>
                <p className="respP classes">
                    .margin-*: Sets the margin of an element to a fixed size.{' '}
                    <br /> .marginTop-*: Sets the top margin of an element to a
                    fixed size. <br /> .marginBottom-*: Sets the bottom margin
                    of an element to a fixed size. <br /> .marginRight-*: Sets
                    the right margin of an element to a fixed size. <br />{' '}
                    .marginLeft-*: Sets the left margin of an element to a fixed
                    size. <br /> .respMargin-*-**: Sets the margin of an element
                    to a responsive size. <br /> .respMarginTop-*-**: Sets the
                    top margin of an element to a responsive size. <br />{' '}
                    .respMarginBottom-*-**: Sets the bottom margin of an element
                    to a responsive size. <br /> .respMarginRight-*-**: Sets the
                    right margin of an element to a responsive size. <br />{' '}
                    .respMarginLeft-*-**: Sets the left margin of an element to
                    a responsive size. <br />
                    .margCenter: Centers an a element vertically on the page.{' '}
                    <br />
                    .margNone: Removes the margin of an element. <br />
                </p>
                <h3 className="respH3" id="padding">
                    Padding Classes
                </h3>
                <p className="respP disc">
                    * or ** stand for padding value(from 100 to 500) <br /> * in
                    respPadding stand for minimal padding value <br /> ** in
                    respPadding stand for maximal padding value
                </p>
                <p className="respP classes">
                    .padding-*: Sets the padding of an element to a fixed size.{' '}
                    <br /> .paddingTop-*: Sets the top padding of an element to
                    a fixed size. <br /> .paddingBottom-*: Sets the bottom
                    padding of an element to a fixed size. <br />{' '}
                    .paddingRight-*: Sets the right padding of an element to a
                    fixed size. <br /> .paddingLeft-*: Sets the left padding of
                    an element to a fixed size. <br /> .respPadding-*-**: Sets
                    the padding of an element to a responsive size. <br />{' '}
                    .respPaddingTop-*-**: Sets the top padding of an element to
                    a responsive size. <br /> .respPaddingBottom-*-**: Sets the
                    bottom padding of an element to a responsive size. <br />{' '}
                    .respPaddingRight-*-**: Sets the right padding of an element
                    to a responsive size. <br /> .respPaddingLeft-*-**: Sets the
                    left Padding of an element to a responsive size. <br />
                    .paddNone: Removes the padding of an element. <br />
                </p>
                <h3 className="respH3" id="flexBox">
                    Flexbox Classes
                </h3>
                <p className="respP classes">
                    .centerContentFlex: Centers the content of a flexbox
                    container both horizontally and vertically. <br />
                    .flex: Creates a flexbox container. <br />
                    .flexContainer: Creates a flexible container <br />
                    &#160;&#160;&#160;.flexItem: Creates a flexible item <br />
                </p>
                <h3 className="respH3" id="float">
                    float Classes
                </h3>
                <p className="respP classes">
                    .floatLeft: Floats an element to the left. <br />
                    .floatRight: Floats an element to the right. <br />
                    .clearFix: clear floating elements. <br />
                </p>
                <h3 className="respH3" id="imgVideo">
                    image and video classes
                </h3>
                <p className="respP classes">
                    .resImg: Responsive image. <br />
                    .resVideo: Responsive video. <br />
                    .resBgImg: Responsive background image. <br />
                </p>
                <h3 className="respH3" id="container">
                    container classes
                </h3>
                <p className="respP classes">
                    .container: Creates a container for element. <br />
                    .flexContainer: Creates a flexible container <br />
                    &#160;&#160;&#160;.flexItem: Creates a flexible item <br />
                </p>
                <h3 className="respH3" id="visibility">
                    visibility classes
                </h3>
                <p className="respP classes">
                    .visibleXs, .visibleSm, .visibleMd, .visibleLg: Sets the
                    display property of the element to none by default and
                    changes it to block for the corresponding screen size using
                    media queries. <br />
                    .hiddenXs, .hiddenSm, .hiddenMd, .hiddenLg: Sets the display
                    property of the element to block by default and changes it
                    to none for the corresponding screen size using media
                    queries. <br />
                </p>
                <h3 className="respH3" id="borderRadius">
                    border radius
                </h3>
                <p className="respP classes">
                    .rounded
                    <br /> .extraRounded
                    <br /> .megaRounded
                    <br /> .superRounded
                    <br /> .ultraRounded
                    <br /> .extremeRounded
                    <br /> .radicalRounded
                    <br /> .hyperRounded
                    <br /> .ultimateRounded
                    <br /> .maxRounded
                    <br /> .beyondRounded
                </p>
            </div>
        </div>
    );
}
