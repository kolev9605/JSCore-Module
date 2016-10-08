"use strict";

function solve([firstHeight,firstWidth,secondHeight,secondWidth]) {
    let minHeight = Math.min(firstHeight, secondHeight);
    let minWidth = Math.min(firstWidth, secondWidth);

    let firstFigureArea = firstHeight * firstWidth;
    let secondFigureArea = secondHeight * secondWidth;

    let innerFigureArea = minHeight * minWidth;

    let figureArea = (firstFigureArea + secondFigureArea) - innerFigureArea;

    return figureArea;
}