export type Type = {
  id: string; // The ID of the type
  name: string; // The name of the type
  has_custom: boolean; // Whether the type has the custom duration option
}

export type Machine = {
  id: string; // The ID of the machine
  type_id: string; // The ID of the type
}

export type MachinePresets = {
  id: string; // The ID of the machine preset
  machine_id: string; // The ID of the machine
  duration: number; // The duration of the machine preset
}

export type Activity = {
  id: string; // The ID of the activity
  machine_preset_id: string; // The ID of the machine preset
  resident_id: string; // The ID of the resident
  start_time: string; // The start time of the activity
}

