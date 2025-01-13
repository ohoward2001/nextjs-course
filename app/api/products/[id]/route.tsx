import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

interface Props {
    params: Promise<{id: string}>
}

export async function PUT(request: NextRequest, {params}: {params: Promise<{id: string}>}) {
    const body = await request.json();

    const res = schema.safeParse(body);

    if (!res.success)
        return NextResponse.json({error: res.error.errors}, {status: 400});

    const user = await prisma.product.findUnique({
        where: {
            id: parseInt((await params).id)
        }
    })
    if (!user)
        return NextResponse.json({error: 'User not found'}, {status: 404});

    const updatedUser = await prisma.product.update({
        where: {
            id: parseInt((await params).id)
        },
        data: {
            name: body.name,
            price: body.price
        }
    })
    return NextResponse.json(updatedUser, {status: 200});
}

export async function DELETE(request: NextRequest, {params}: {params: Promise<{id: string}>}) {
    
    const user = await prisma.product.findUnique({
        where: {
            id: parseInt((await params).id)
        }
    });

    if (!user)
        return NextResponse.json({error: 'User not found'}, {status: 404})

    await prisma.product.delete({
        where: {
            id: parseInt((await params).id)
        }
    })
    return NextResponse.json({})
}