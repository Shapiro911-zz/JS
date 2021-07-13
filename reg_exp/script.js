const rx1 = /^'|\B'|'$/g;
const st1 = 'He said:\'you aren\'t,\'-answer';
if (st1)
    console.log(st1.replace(rx1, '"'));