import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import bcrypt from 'bcrypt';


const schema = z.object({
    email: z.string().email(),
    password: z.string().min(5)
});

export async function POST(request: NextRequest) {
    const body = await request.json();

    const isValid = schema.safeParse(body);

    if (!isValid.success) {
        return NextResponse.json(isValid.error.errors, {status: 400})
    }

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if (user) 
        return NextResponse.json(
    {error: "User already exists"}, {status: 400})

    const hashedPass = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword: hashedPass
        }
        
    });

    return NextResponse.json({ email: newUser.email});
}