import { Work } from "@/models";
import React, { Fragment } from "react";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { WordCard } from "./wordCard";

export interface WorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return null;

  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WordCard work={work}/>
          <Divider sx={{ my : 3 }} />
        </Fragment>
      ))}
    </Box>
  );
}
