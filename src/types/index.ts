export type Type = {
	id: string; // The ID of the type
	name: string; // The name of the type
	has_custom: boolean; // Whether the type has the custom duration option
};

export type Machine = {
	id: string; // The ID of the machine
	type_id: string; // The ID of the type
};

export type MachinePresets = {
	id: string; // The ID of the machine preset
	machine_id: string; // The ID of the machine
	duration: number; // The duration of the machine preset
};

export type Resident = {
	room_number: string; // The room number of the resident
	first_name: string; // The first name of the resident
	last_name: string; // The last name of the resident
};

export type Activity = {
	id: string; // The ID of the activity
	machine: Machine; // The machine used for the activity
	machine_type: Type; // The type of the machine used for the activity
	preset: MachinePresets; // The machine preset used for the activity
	resident: Resident; // The resident who made the activity
	start_time: string; // The start time of the activity
};
