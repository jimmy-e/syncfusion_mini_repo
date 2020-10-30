import * as React from 'react';
import {
  Aggregate,
  AggregateColumnDirective,
  AggregateColumnsDirective,
  AggregateDirective,
  AggregatesDirective,
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
} from '@syncfusion/ej2-react-grids';

const data = [
  { EmployeeID: 5, Freight: 32.38 },
  { EmployeeID: 6, Freight: 11.61 },
  { EmployeeID: 4, Freight: 65.83 },
  { EmployeeID: 3, Freight: 41.34 },
  { EmployeeID: 4, Freight: 51.3 },
  { EmployeeID: 3, Freight: 58.17 },
  { EmployeeID: 5, Freight: 22.98 },
  { EmployeeID: 9, Freight: 148.33 },
  { EmployeeID: 3, Freight: 13.97 },
  { EmployeeID: 4, Freight: 81.91 },
  { EmployeeID: 1, Freight: 140.51 },
  { EmployeeID: 4, Freight: 3.25 },
  { EmployeeID: 4, Freight: 55.09 },
  { EmployeeID: 4, Freight: 3.05 },
  { EmployeeID: 8, Freight: 48.29 },
];

const FooterTemplateComponent: React.FC = () => <h3>I am a footer template</h3>;

const TableWithBug: React.FC = () => (
  <GridComponent dataSource={data}>
    <ColumnsDirective>
      <ColumnDirective field="EmployeeID" />
      <ColumnDirective field="Freight" />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective
            field="EmployeeID"
            footerTemplate={FooterTemplateComponent}
            type="sum"
          />
          <AggregateColumnDirective
            field="Freight"
            footerTemplate={FooterTemplateComponent}
            type="sum"
          />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Aggregate]} />
  </GridComponent>
);

const TableWithoutBug: React.FC = () => (
  <GridComponent dataSource={data}>
    <ColumnsDirective>
      <ColumnDirective field="EmployeeID" />
      <ColumnDirective field="Freight" />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field="EmployeeID" type="sum" />
          <AggregateColumnDirective field="Freight" type="sum" />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Aggregate]} />
  </GridComponent>
);

const Spa: React.FC = () => (
  <>
    <h1>Table With Bug</h1>
    <TableWithBug />
    <h1>Table Without Bug</h1>
    <TableWithoutBug />
  </>
);

export default Spa;
