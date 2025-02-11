import { FC } from 'react';
import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import rooms from '@/rooms.json';

const schema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	roomNumber: z.string().min(1, 'Room number is required'),
	saveProfile: z.boolean(),
});

type FormData = z.infer<typeof schema>;

const LoginForm: FC = () => {
	const form = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = form;

	const onSubmit = (value: z.infer<typeof schema>) => {
		console.log(value);
	};

	return (
		<Form {...form}>
			<form
				className="flex flex-col gap-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<FormField
					control={control}
					name="firstName"
					render={({ field }) => (
						<FormItem className={'space-y-[0.375rem]'}>
							<FormLabel className={'font-medium'}>
								First Name
							</FormLabel>
							<FormControl>
								<Input
									className={'shadow-none px-4 py-2'}
									placeholder="John"
									{...field}
								/>
							</FormControl>
							<FormMessage>
								{errors.firstName?.message}
							</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="lastName"
					render={({ field }) => (
						<FormItem className={'flex flex-col'}>
							<FormLabel className={'font-medium'}>
								Last Name
							</FormLabel>
							<FormControl>
								<Input
									className={'shadow-none px-4 py-2'}
									placeholder="Doe"
									{...field}
								/>
							</FormControl>
							<FormMessage>
								{errors.lastName?.message}
							</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="roomNumber"
					render={({ field }) => (
						<FormItem className={'flex flex-col'}>
							<FormLabel className={'font-medium'}>
								Room Number
							</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger
										className={'shadow-none px-4 py-2'}
									>
										<SelectValue placeholder="Select your room number" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{rooms.map((room: string) => (
										<SelectItem key={room} value={room}>
											{room}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage>
								{errors.roomNumber?.message}
							</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="saveProfile"
					render={({ field }) => (
						<FormItem
							className={'flex items-center space-x-2 my-2'}
						>
							<FormControl>
								<Checkbox
									className={'shadow-none h-4 w-4'}
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<FormLabel className={'font-medium !mt-0'}>
								Save Profile Information
							</FormLabel>
						</FormItem>
					)}
				/>
				<Button className={'h-12'} type="submit">
					Continue
				</Button>
			</form>
		</Form>
	);
};

export default LoginForm;
