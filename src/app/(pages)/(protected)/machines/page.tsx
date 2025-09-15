"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";


export default function MachinesPage ()
{
    return (
        <div>
            <h1>Machines</h1>
            <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
    );
}