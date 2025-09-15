"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IconAlertCircle } from "@tabler/icons-react";
import Image from "next/image";
import Rooms from "@/data/rooms.json";
import { PhoneInput } from "@/components/ui/phone-input";
import { Combobox } from "@/components/ui/combo-box";
import Link from "next/link";

const signUpSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    roomNumber: z.string().min(1, { message: "Room number is required" }),
    email: z.string().email({
        message: "Invalid email address"
    }),
    phoneNumber: z.string().min(1, { message: "Phone number is required" }),
    password: z.string().min(1, {
        message: "Password is required"
    })
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpForm ()
{
    // State and hooks
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            roomNumber: "",
            phoneNumber: ""
        }
    });

    const { handleSubmit } = form;

    // Handles the form submission
    async function onSubmit (values: SignUpFormValues)
    {
        if (isSubmitting) return;

        setError(null);
        setIsSubmitting(true);

        // TODO: Implement sign-up logic here
        console.log("Sign-up values:", values);

        setIsSubmitting(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 w-full max-w-sm">
                <div className="space-y-4">
                    <Image className="mx-auto" src="/chall-logo.png" width="140" height="140" alt="Canada Hall Logo" />
                    <h1 className="text-2xl text-center font-semibold">Register for laundry system</h1>
                    <p className="text-center">Already have an account? <Link className="text-amber-500 hover:underline" href="/login">Login</Link></p>
                </div>


                {error && (
                    <Alert variant="destructive">
                        <IconAlertCircle className="w-4 h-4" />
                        <AlertTitle>An error has occurred</AlertTitle>
                        <AlertDescription>
                            {error}
                        </AlertDescription>
                    </Alert>
                )}

                <div className="space-y-6">
                    {/* Email Address */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormDescription>
                                    Please enter a your student email address.
                                </FormDescription>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Password */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormDescription>
                                    Please choose a strong password.
                                </FormDescription>
                                <FormControl>
                                    <Input type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* First Name */}
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormDescription>
                                    Please enter your first name.
                                </FormDescription>
                                <FormControl>
                                    <Input placeholder="e.g. John" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Last Name */}
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormDescription>
                                    Please enter your last name.
                                </FormDescription>
                                <FormControl>
                                    <Input placeholder="e.g. Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Room Number */}
                    <FormField
                        control={form.control}
                        name="roomNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Room Number</FormLabel>
                                <FormDescription>
                                    Please select your room number.
                                </FormDescription>
                                <FormControl>
                                    <Combobox
                                        options={Rooms.map(room => ({ value: room, label: room }))}
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        placeholder="Select room number"
                                        searchPlaceholder="Search room..."
                                        emptyMessage="No room found."
                                        className="w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Phone Number */}
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormDescription>
                                    Please enter your phone number.
                                </FormDescription>
                                <FormControl>
                                    <PhoneInput {...field} international defaultCountry="TT" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating account..." : "Sign Up"}
                </Button>
            </form>
        </Form>
    );
}