import { JSXElementConstructor, ReactElement, ReactFragment } from "react";
import { JSX } from "react/jsx-runtime";
import { Country } from "./helpers/TypeInterfaces"
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from "react-icons/bs";
import './CountryLine.scss';
import { setMaxIdleHTTPParsers } from "http";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

interface CountryLineProps {
    guessInfo: Country;
    correctInfo: Country;
}

var populationLine;
var landAreaLine;
var continentLine;
var flagColoursLine = <div></div>;
const CountryLine = ({ guessInfo, correctInfo }: CountryLineProps) => {

    //Population Check
    if (guessInfo.population > correctInfo.population) {
        populationLine = <div className='CountryLine-incorrect'>{guessInfo.population.toLocaleString()}<BsFillArrowDownSquareFill /></div>;
    }
    else if (guessInfo.population < correctInfo.population) {
        populationLine = <div className='CountryLine-incorrect'>{guessInfo.population.toLocaleString()}<BsFillArrowUpSquareFill /></div>;
    }
    else {
        populationLine = <div className='CountryLine-correct'>{guessInfo.population.toLocaleString()}</div>;
    }

    //Land area check
    if (guessInfo.landArea > correctInfo.landArea) {
        landAreaLine = <div className='CountryLine-incorrect'>{guessInfo.landArea.toLocaleString()}<BsFillArrowDownSquareFill /></div>;
    }
    else if (guessInfo.landArea < correctInfo.landArea) {
        landAreaLine = <div className='CountryLine-incorrect'>{guessInfo.landArea.toLocaleString()}<BsFillArrowUpSquareFill /></div>;
    }
    else {
        landAreaLine = <div className='CountryLine-correct'>{guessInfo.landArea.toLocaleString()}</div>;
    }

    //Continent Check
    //check if guess country is single continent
    if (typeof (guessInfo.continent) === "string") {
        if (typeof (correctInfo.continent) === "string") {
            //Logic if both are strings
            if (guessInfo.continent === correctInfo.continent) {
                continentLine = <div className='CountryLine-correct'>{guessInfo.continent}</div>;
            }
            else {
                continentLine = <div className='CountryLine-incorrect'>{guessInfo.continent}</div>;
            }
        }
        else {
            //logic if the correct answer is transcontinental but guess is not
            if (guessInfo.continent === correctInfo.continent[0] || guessInfo.continent === correctInfo.continent[1]) {
                continentLine = <div className='CountryLine-partcorrect'>{guessInfo.continent}</div>;
            }
            else {
                continentLine = <div className='CountryLine-incorrect'>{guessInfo.continent}</div>;
            }
        }
    }
    //logic if the guess if is transcontinental
    else {
        if (typeof (correctInfo.continent) === "string") {
            if (guessInfo.continent[0] === correctInfo.continent || guessInfo.continent[1] === correctInfo.continent) {
                continentLine = <div className="CountryLine-partcorrect">{guessInfo.continent[0]}-{guessInfo.continent[1]}</div>
            }
            else {
                continentLine = <div className='CountryLine-incorrect'>{guessInfo.continent[0]}-{guessInfo.continent[1]}</div>
            }
        }
        //logic if both are transcontinental
        else {
            var count = 0;
            for (const continent of guessInfo.continent) {
                if (correctInfo.continent.includes(continent)) {
                    count += 1;
                }
            }
            if (count === 2) {
                continentLine = <div className="CountryLine-correct">{guessInfo.continent[0]}-{guessInfo.continent[1]}</div>
            }
            else if (count === 1) {
                continentLine = <div className="CountryLine-partcorrect">{guessInfo.continent[0]}-{guessInfo.continent[1]}</div>
            }
            else {
                continentLine = <div className="CountryLine-incorrect">{guessInfo.continent[0]}-{guessInfo.continent[1]}</div>
            }
        }
    }

    const flagColourIntersection = (gFlagColours: string[], cFlagColours: string[]) => {
        const intersection: string[] = [];
        for (const colour of cFlagColours) {
            if (gFlagColours.includes(colour)) {
                intersection.push(colour);
            }
        }
        return intersection;
    }

    const checkFlagColours = flagColourIntersection(guessInfo.flagColours, correctInfo.flagColours);
    if (checkFlagColours.length === 0) {
        flagColoursLine = <div className="CountryLine-incorrect">{guessInfo.flagColours}</div>;

    }
    else if ((checkFlagColours.length < correctInfo.flagColours.length) || (checkFlagColours.length < guessInfo.flagColours.length)) {
        flagColoursLine = <div className="CountryLine-partcorrect">{guessInfo.flagColours}</div>;
    }
    
    else if ((checkFlagColours.length === correctInfo.flagColours.length) && (checkFlagColours.length === guessInfo.flagColours.length)) {
        flagColoursLine = <div className="CountryLine-correct">{guessInfo.flagColours}</div>;
    }

//case where there is correct number of colours, only case that can be correct





return (
    <tr>
        <td>
            {guessInfo.name}
        </td>
        <td>
            {continentLine}
        </td>
        <td>
            {populationLine}
        </td>
        <td>
            {landAreaLine}
        </td>
        <td>
            {flagColoursLine}
        </td>
    </tr>
)
};

export default CountryLine;