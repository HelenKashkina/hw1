function konus (rad, visochina){
    [rad, visochina] = [rad, visochina].map(Number);
    let obem = (Math.pow(rad, 2)* Math.PI*visochina)/3;
    let lice =(Math.PI*rad*Math.sqrt((Math.pow(rad,2)+Math.pow(visochina,2))) + (Math.PI*Math.pow(rad,2)));
console.log(`обем е = ${obem}`);
console.log(`лице е = ${lice}`);
}
konus (['10','250'])