import type { Meta, StoryObj } from '@storybook/react';

import { Activity, ActivityList } from '@/components/Activity';

const meta = {
	title: 'Primitive/Activity',
	component: (props) => {
		return (
			<ActivityList>
				<Activity {...props} />
			</ActivityList>
		);
	},
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Activity>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleActivity = {
	id: '1',
	machine_type: {
		id: '1',
		name: 'Washer',
		has_custom: true,
	},
	machine: {
		id: '1',
		type_id: '1',
	},
	preset: {
		id: '1',
		machine_id: '1',
		duration: 60,
	},
	resident: {
		room_number: '101',
		first_name: 'John',
		last_name: 'Doe',
	},
	start_time: '2022-01-01T00:00:00Z',
};

export const Default: Story = {
	args: {
		activity: exampleActivity,
	},
};
