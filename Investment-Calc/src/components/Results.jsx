import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';

const Results = ({ input }) => {
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Intrest (Year)</th>
                    <th> Total Intrest </th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((data) => {
                    const totalIntrest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                    const totalAmountInvested = data.valueEndOfYear - totalIntrest;
                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalIntrest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );

                })}
            </tbody>
        </table>
    );
};

export default Results;