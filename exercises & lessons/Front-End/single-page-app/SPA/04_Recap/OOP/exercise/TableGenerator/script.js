import TblGen from './TableGenerator.js';

let tblstyle = {
    table: {
        border: 'solid 1px red',
        width: '200px',
        height: '200px',
        borderCollapse: 'collapse'
    },
    tr: {
        border:'solid 1px red'
    },
    td: {
        border: 'solid 1px red'
    }
}

let tbg = new TblGen('Users', 5, 4, tblstyle);
tbg.render('#root', ['cell1', 'cell2', 'cell3', 'cell4']);
tbg.addRow();
tbg.addRow()

console.log(tbg);