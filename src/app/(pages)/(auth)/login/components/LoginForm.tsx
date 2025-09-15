"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IconAlertCircle } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const loginSchema = z.object({
    email: z.string().email({
        message: "Invalid email address"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm ()
{
    // State and hooks
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const { handleSubmit } = form;

    // Handles the form submission
    async function onSubmit (values: LoginFormValues)
    {
        if (isSubmitting) return;

        setError(null);
        setIsSubmitting(true);

        const response = await signIn("credentials", {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/machines"
        });

        if (response?.error) setError("Invalid email or password");
        if (response?.url) redirect(response.url);

        setIsSubmitting(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 w-full max-w-sm">
                <div className="space-y-4">
                    <Image className="mx-auto" src="/chall-logo.png" width="140" height="140" alt="Canada Hall Logo" />
                    <h1 className="text-2xl text-center font-semibold">Sign into laundry system</h1>
                    <p className="text-center">Don&apos;t have an account? <Link className="text-amber-500 hover:underline" href='/signup'>Sign up</Link></p>
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
                                    This is the email address you registered with.
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
                                    This is the password you registered with.
                                </FormDescription>
                                <FormControl>
                                    <Input type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Login"}
                </Button>
            </form>
        </Form>
    );
}