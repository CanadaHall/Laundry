import authOptions from "@/config/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function RootPage ()
{
    const session = await getServerSession(authOptions);
    if (!session) redirect("/login");
    redirect("/machines");
}