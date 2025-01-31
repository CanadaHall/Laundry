import { type FC } from 'react';
import type { Activity as ActivityType } from "@/types";

interface Props {
  activity: ActivityType;
}

const Activity: FC<Props> = ({ activity }) => {

  return (
    <div>
      Activity
    </div>
  )
}

export default Activity;