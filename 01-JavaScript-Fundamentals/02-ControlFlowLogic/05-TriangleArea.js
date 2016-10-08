"use strict";

function solve([a,b,c]) {
    //p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)
    let p = (Number(a) + Number(b) + Number(c)) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return area;
}

solve(['2', '3.5', '4']);