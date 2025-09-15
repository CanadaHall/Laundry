import { getServerSession } from "next-auth";
import { type ReactNode } from "react";
import { redirect } from "next/navigation";
import authOptions from "@/config/authOptions";

export const dynamic = "force-dynamic"; // avoid accidental static optimization

export default async function ProtectedLayout ({ children }: Readonly<{ children: ReactNode; }>)
{
    const session = await getServerSession(authOptions);
    if (!session) redirect("/login");

    return (
        <main>
            {children}
        </main>
    );
}