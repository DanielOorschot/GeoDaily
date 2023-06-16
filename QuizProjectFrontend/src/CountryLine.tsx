import { ReactFragment } from "react";
import { JSX } from "react/jsx-runtime";
import { Country } from "./helpers/TypeInterfaces"
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from "react-icons/bs";

interface CountryLineProps {
    guessInfo: Country;
    correctInfo: Country;
}

var populationLine: string | number | boolean | JSX.Element | ReactFragment | null | undefined;

const CountryLine = ({ guessInfo, correctInfo }: CountryLineProps) => {

    if (guessInfo.population > correctInfo.population) {
        populationLine = <div>{guessInfo.population}<BsFillArrowDownSquareFill/></div>;
    }
    else if (guessInfo.population < correctInfo.population) {
        populationLine = <div>{guessInfo.population}<BsFillArrowUpSquareFill/></div>;
    }
    else {
        populationLine = <div>{guessInfo.population}</div>;
    }
    return (
        <tr>
            <td>
                {guessInfo.name}
            </td>
            <td>
                {guessInfo.continent}
            </td>
            <td>
                {populationLine}
            </td>
            <td>
                {guessInfo.landArea}
            </td>
        </tr>
    )
};

export default CountryLine;