import { NextResponse } from 'next/server';

const BACKEND_URL = 'http://localhost:5000/api/bookings';

export async function GET() {
    try {
        const response = await fetch(BACKEND_URL);
        const bookings = await response.json();
        return NextResponse.json(bookings);
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch bookings', error }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        if (!response.ok) {
            return NextResponse.json(data, { status: response.status });
        }
        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to create booking', error }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const body = await request.json();
        const response = await fetch(BACKEND_URL, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: 'Failed to delete booking', error }, { status: 500 });
    }
}
