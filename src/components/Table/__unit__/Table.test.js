import React from "react";
import { mount } from "enzyme";
import theme, {
  Table,
  TableCell,
  TableHeading,
  TableRow
} from "../../../index";

describe("Table", () => {
  it("renders", () => {
    expect.assertions(1);
    const wrapper = mount(
      <Table theme={theme}>
        <thead>
          <TableRow theme={theme}>
            <TableHeading theme={theme}>Heading 1</TableHeading>
            <TableHeading theme={theme}>Heading 2</TableHeading>
            <TableHeading theme={theme}>Heading 3</TableHeading>
          </TableRow>
        </thead>
        <tbody>
          <TableRow theme={theme}>
            <TableCell theme={theme}>Cell 1</TableCell>
            <TableCell theme={theme}>Cell 2</TableCell>
            <TableCell theme={theme}>Cell 3</TableCell>
          </TableRow>
          <TableRow theme={theme}>
            <TableCell theme={theme}>Cell 1</TableCell>
            <TableCell theme={theme}>Cell 2</TableCell>
            <TableCell theme={theme}>Cell 3</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    expect(wrapper).toBeDefined();
  });
});
