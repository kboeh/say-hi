import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { getOneComment } from '@/lib/mongo/products';
import { addComment } from '@/lib/mongo/products';

export async function POST (request) {
    const body = request.json();
    const { name, email, password } = body;
    if (!namw || !email || !password) {
        return new NextResponse('Missing Fields'), { status: 400 };
    }

    const exist = await getOneComment(email);
    if(exist) {
        throw new Error('Email already exists');
    }

    //second param = salt
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await addComment(comment);

    return NextResponse(user);
}

