import type { Meta, StoryObj } from '@storybook/react';

import Activity from '@/components/Activity';

const meta = {
  title: 'Primitive/Activity',
  component: Activity,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Activity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activity: {
      id: '1',
      machine_preset_id: '1',
      resident_id: '1',
      start_time: '2022-01-01T00:00:00Z',
    },
  },
};