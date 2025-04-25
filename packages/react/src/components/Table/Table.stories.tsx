import React from "react";
import { StoryFn } from "@storybook/react";
import { Table, TableProps, TableColumn } from "./Table";

interface User {
  name: string;
  email: string;
  age: number;
}

const columns: TableColumn<User>[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "age", label: "Age" },
];

const data: User[] = [
  { name: "Alice", email: "alice@email.com", age: 28 },
  { name: "Bob", email: "bob@email.com", age: 34 },
  { name: "Carol", email: "carol@email.com", age: 22 },
];

export default {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn<TableProps<User>> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns,
  data,
};

export const Empty = Template.bind({});
Empty.args = {
  columns,
  data: [],
  emptyMessage: "No users found",
};
