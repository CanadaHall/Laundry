import { type ReactNode } from "react";


export default function UnprotectedLayout ({ children }: Readonly<{ children: ReactNode; }>)
{
    return (
        <main className="@container flex min-h-screen flex-col items-center justify-center p-10">
            {children}
        </main>
    );
}