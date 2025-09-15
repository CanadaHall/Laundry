import { type ReactNode } from "react";


export default function UnprotectedLayout ({ children }: Readonly<{ children: ReactNode; }>)
{
    return (
        <main>
            {children}
        </main>
    );
}