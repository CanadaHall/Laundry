import { ReactNode, type FC } from 'react';
import type { Activity as ActivityType } from '@/types';

interface Props {
	activity: ActivityType;
}

interface ActivityStatusProps {
	status: 'ongoing' | 'completed';
}

const ActivityStatus: FC<ActivityStatusProps> = ({ status }) => {
	const isCompleted = status === 'completed';
	return (
		<div
			className={`${
				isCompleted
					? 'bg-green-100 text-green-500'
					: 'bg-sky-100 text-sky-500'
			} gap-[0.375rem] text-sm px-2 h-[1.375rem] rounded-sm justify-center flex items-center`}
		>
			<div
				className={`w-[0.375rem] h-[0.375rem] ${
					isCompleted ? 'bg-green-400' : 'bg-sky-400'
				} rounded-full inline-block`}
			></div>
			<p>{isCompleted ? 'Completed' : 'Ongoing'}</p>
		</div>
	);
};

const Activity: FC<Props> = ({ activity }) => {
	const activityTitle: string = `${activity.machine_type.name} ${activity.machine.id}`;

	return (
		<li
			className={
				'flex flex-row w-full justify-between px-2 py-1 hover:bg-gray-100 transition-colors cursor-pointer rounded-sm'
			}
			title={activityTitle}
		>
			<div>
				<h1>{activityTitle}</h1>
				<p className={'text-gray-500'}>
					est. time left <span>8 mins</span>
				</p>
			</div>
			<ActivityStatus status={'ongoing'} />
		</li>
	);
};

const ActivityList: FC<{ children: ReactNode }> = ({ children }) => {
	return <ul className={'flex flex-col gap-1 min-w-64'}>{children}</ul>;
};

export { Activity, ActivityList };
