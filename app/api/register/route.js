import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { getOneComment } from '@/lib/mongo/products';
import { addComment } from '@/lib/mongo/products';

export async function POST (request) {
    const body = await request.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
        return new NextResponse('Missing Fields'), { status: 400 };
    }

    const exist = await getOneComment(email);
    if(exist) {
        throw new Error('Email already exists');
    }
    //if the email doesn't already exist then hash pw and create user in database
    //second param = salt
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await addComment(email);

    return NextResponse.json(user);
}

