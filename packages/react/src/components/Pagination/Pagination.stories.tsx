import React, { useState } from "react";
import { StoryFn } from "@storybook/react";
import { Pagination, PaginationProps } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn<PaginationProps> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => {
        setCurrentPage(page);
        args.onPageChange?.(page);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  currentPage: 5,
  totalPages: 20,
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};

export const FewPages = Template.bind({});
FewPages.args = {
  currentPage: 2,
  totalPages: 3,
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};

export const CustomMaxVisible = Template.bind({});
CustomMaxVisible.args = {
  currentPage: 5,
  totalPages: 20,
  maxVisiblePages: 7,
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};
