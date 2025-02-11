import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import LoginForm from '@/components/forms/Login'; // Adjust import path

const schema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	roomNumber: z.string().min(1, 'Room number is required'),
	saveProfile: z.boolean(),
});

export default {
	title: 'Components/Forms/Login',
	component: LoginForm,
} as Meta<typeof LoginForm>;

const Template: StoryObj<typeof LoginForm> = {
	render: () => <LoginFormWrapper />,
};

const LoginFormWrapper = () => {
	const methods = useForm({
		resolver: zodResolver(schema),
	});

	return (
		<FormProvider {...methods}>
			<LoginForm />
		</FormProvider>
	);
};

export const Default = Template;
