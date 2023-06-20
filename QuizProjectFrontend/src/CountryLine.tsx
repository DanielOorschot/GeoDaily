import { ReactFragment } from "react";
import { JSX } from "react/jsx-runtime";
import { Country } from "./helpers/TypeInterfaces"
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from "react-icons/bs";
import './CountryLine.scss';

interface CountryLineProps {
    guessInfo: Country;
    correctInfo: Country;
}

var populationLine;
var landAreaLine;
var continentLine;

const CountryLine = ({ guessInfo, correctInfo }: CountryLineProps) => {

    if (guessInfo.population > correctInfo.population) {
        populationLine = <div className='CountryLine-incorrect'>{guessInfo.population.toLocaleString()}<BsFillArrowDownSquareFill /></div>;
    }
    else if (guessInfo.population < correctInfo.population) {
        populationLine = <div className='CountryLine-incorrect'>{guessInfo.population.toLocaleString()}<BsFillArrowUpSquareFill /></div>;
    }
    else {
        populationLine = <div className='CountryLine-correct'>{guessInfo.population.toLocaleString()}</div>;
    }

    if (guessInfo.landArea > correctInfo.landArea) {
        landAreaLine = <div className='CountryLine-incorrect'>{guessInfo.landArea.toLocaleString()}<BsFillArrowDownSquareFill /></div>;
    }
    else if (guessInfo.landArea < correctInfo.landArea) {
        landAreaLine = <div className='CountryLine-incorrect'>{guessInfo.landArea.toLocaleString()}<BsFillArrowUpSquareFill /></div>;
    }
    else {
        landAreaLine = <div className='CountryLine-correct'>{guessInfo.landArea.toLocaleString()}</div>;
    }

    if (typeof (guessInfo.continent) === "string") {
        if (typeof (correctInfo.continent) === "string") {
            if (guessInfo.continent === correctInfo.continent) {
                continentLine = <div className='CountryLine-correct'>{guessInfo.continent}</div>;
            }
            else {
                continentLine = <div className='CountryLine-incorrect'>{guessInfo.continent}</div>;
            }
        }
        else {
            if (guessInfo.continent === correctInfo.continent[0] || guessInfo.continent === correctInfo.continent[1]) {
                continentLine = <div className='CountryLine-partcorrect'>{guessInfo.continent}</div>;
            }
            else {
                continentLine = <div className='CountryLine-incorrect'>{guessInfo.continent}</div>;
            }
        }
    }
    else {
        if (typeof (correctInfo.continent) === "string") {
            if (guessInfo.continent[0] === correctInfo.continent || guessInfo.continent[1] === correctInfo.continent) {
                continentLine = <div className="CountryLine-partcorrect">{guessInfo.continent[0]}-{guessInfo.continent[1]}</div>
            }
            else {
                continentLine = <div className='CountryLine-incorrect'>{guessInfo.continent[0]}-{guessInfo.continent[1]}</div>
            }
        }
        continentLine = <div>{guessInfo.continent[0]}-{guessInfo.continent[1]}</div>
    }

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
        </tr>
    )
};

export default CountryLine;