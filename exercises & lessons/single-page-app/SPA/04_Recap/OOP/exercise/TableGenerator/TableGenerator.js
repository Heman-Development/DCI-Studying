
export default class TblGen{
    constructor(tblName, rows, cols, style) {
        this.tblName = tblName;
        this.rows = rows;
        this.cols = cols;
        this.style = style;
        this.table;
    }


    render=(cont, data)=> {
        this.table = document.createElement('table');
        Object.assign(this.table.style, this.style.table)
        
        for (let i = 0; i < this.rows; i++) {
            let row = document.createElement('tr');
            row.id = `row-${i + 1}`;        //<tr id="row-1"></tr>
            Object.assign(row.style, this.style.tr);

            for (let j = 0; j < this.cols; j++) {
                let col = document.createElement('td');
                Object.assign(col.style, this.style.td);
                col.id = `row-${i}-col-${j + 1}`     //id=row-1-col-3
                col.innerText = data[j]
                row.appendChild(col);
            }

            this.table.appendChild(row);
        }

        document.querySelector(cont).appendChild(this.table);
    }

    addRow() {
        let row = document.createElement('tr');
        for (let j = 0; j < this.cols; j++) {
          let col = document.createElement("td");
          col.innerText = j;
          row.appendChild(col);
        }
        this.table.appendChild(row)
    }

    
}