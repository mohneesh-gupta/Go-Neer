export const MOCK_USERS = [
    {
        id: 'user-1',
        email: 'user@test.com',
        password: 'password123',
        user_metadata: { full_name: 'Test User' },
        role: 'user'
    },
    {
        id: 'vendor-1',
        email: 'vendor@test.com',
        password: 'password123',
        user_metadata: { full_name: 'Test Vendor' },
        role: 'vendor'
    },
    {
        id: 'admin-1',
        email: 'admin@test.com',
        password: 'password123',
        user_metadata: { full_name: 'Admin User' },
        role: 'admin'
    }
];

export const MOCK_PROFILES = [
    { id: 'user-1', full_name: 'Test User', phone: '1234567890', role: 'user' },
    { id: 'vendor-1', full_name: 'Test Vendor', phone: '9876543210', role: 'vendor' },
    { id: 'admin-1', full_name: 'Admin User', phone: '1122334455', role: 'admin' }
];

export const MOCK_VENDORS = [
    {
        id: 'v1',
        user_id: 'vendor-1',
        shop_name: 'Aqua Pure Supplies',
        address: '123 Water St, Delhi',
        rating: 4.8,
        is_open: true,
        image_url: 'https://images.unsplash.com/photo-1541807353925-5f96944e8574?w=500&auto=format&fit=crop&q=60'
    },
    {
        id: 'v2',
        user_id: 'vendor-2', // Placeholder for dynamic creation
        shop_name: 'Himalayan Flow',
        address: '456 Mountain Rd, Mumbai',
        rating: 4.5,
        is_open: true,
        image_url: 'https://images.unsplash.com/photo-1621250395781-a7b6b3e75E7e?w=500&auto=format&fit=crop&q=60'
    }
];

export const MOCK_PRODUCTS = [
    {
        id: 'p1',
        vendor_id: 'vendor-1',
        name: '20L Bisleri Water Jar',
        description: 'Pure mineral water in a 20L jar. Refundable deposit required.',
        price: 80,
        stock: 50,
        image_url: 'https://m.media-amazon.com/images/I/41-j+-4XbSL.jpg'
    },
    {
        id: 'p2',
        vendor_id: 'vendor-1',
        name: '1L Water Bottle (Case of 12)',
        description: 'Perfect for events and parties.',
        price: 240,
        stock: 100,
        image_url: 'https://m.media-amazon.com/images/I/61Z6y3jXjmL._SL1500_.jpg'
    },
    {
        id: 'p3',
        vendor_id: 'vendor-1', // Shared vendor for demo
        name: 'Cooling Water Dispenser',
        description: 'Electric water dispenser with formatting.',
        price: 3500,
        stock: 5,
        image_url: 'https://m.media-amazon.com/images/I/41K0p5S5HFL.jpg'
    }
];

export const MOCK_ORDERS = [
    {
        id: 'o1',
        created_at: '2023-10-25T10:00:00Z',
        total_amount: 320,
        status: 'Delivered',
        customer: 'Test User',
        items: [
            { name: '20L Bisleri Water Jar', quantity: 4, price: 80 }
        ]
    },
    {
        id: 'o2',
        created_at: '2023-10-26T14:30:00Z',
        total_amount: 80,
        status: 'Pending',
        customer: 'Test User',
        items: [
            { name: '20L Bisleri Water Jar', quantity: 1, price: 80 }
        ]
    }
];
