import React,{} from "react";
//import "./styles.css";
//import db from './db.json';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import filterFactory,{textFilter} from "react-bootstrap-table2-filter"

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

// export const productsGenerator = quantity => {
//   const items = [];
//   for (let i = 0; i < quantity; i++) {
//     items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
//   }
//   return items;
// };

const data = [{"id":1,"name":"Torie","email":"trustman0@amazon.co.uk","age":45},
{"id":2,"name":"Kordula","email":"kgecks1@deviantart.com","age":30},
{"id":3,"name":"Vikki","email":"vsimoens2@ted.com","age":48},
{"id":4,"name":"Burnaby","email":"bcowern3@forbes.com","age":54},
{"id":5,"name":"Teddie","email":"ttraice4@zdnet.com","age":57},
{"id":6,"name":"Sapphira","email":"shutchinges5@cam.ac.uk","age":53},
{"id":7,"name":"Shayna","email":"sdimitresco6@uiuc.edu","age":21},
{"id":8,"name":"Caron","email":"ctomkinson7@nature.com","age":47},
{"id":9,"name":"Hulda","email":"hceresa8@omniture.com","age":24},
{"id":10,"name":"Neile","email":"nclements9@irs.gov","age":39},
{"id":11,"name":"Denver","email":"dpagnina@opensource.org","age":33},
{"id":12,"name":"Louella","email":"lcarlillb@webs.com","age":28},
{"id":13,"name":"Margarita","email":"mlewknorc@spiegel.de","age":49},
{"id":14,"name":"Elise","email":"epetruskad@51.la","age":19},
{"id":15,"name":"Consuela","email":"cbirtwistlee@pbs.org","age":24},
{"id":16,"name":"Moise","email":"mhugettf@sfgate.com","age":58},
{"id":17,"name":"Emiline","email":"efoucardg@weibo.com","age":30},
{"id":18,"name":"Rosaleen","email":"rionescoh@typepad.com","age":28},
{"id":19,"name":"William","email":"wkivlini@usgs.gov","age":53},
{"id":20,"name":"Tallie","email":"tkeenleysidej@google.com.br","age":33},
{"id":21,"name":"Kinny","email":"kbrazeltonk@whitehouse.gov","age":49},
{"id":22,"name":"Tybi","email":"tpapworthl@auda.org.au","age":52},
{"id":23,"name":"Caria","email":"ccrudgem@devhub.com","age":47},
{"id":24,"name":"Justin","email":"jluebbertn@ucsd.edu","age":55},
{"id":25,"name":"Dusty","email":"dallano@issuu.com","age":49}]
const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
    filter:textFilter()
  },
  {
    dataField: "email",
    text: "Email"
  },{
      dataField:"age",
      text: "Age"
  }
];

export default function Table() {
  return (
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={data}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
        filter={filterFactory()}
      />
    </div>
  );
}