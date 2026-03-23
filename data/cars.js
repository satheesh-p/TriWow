export const cars = [
    // Manual Cars
    {
        id: 1,
        name: "Maruti Baleno",
        type: "car",
        category: "Hatchback",
        image: "/images/cars/baleno.avif",
        prices: {
            "1-10 Days": "₹1300",
            "11-29 Days": "₹1200",
            "30+ Days": "₹1000"
        },
        features: ["5 Seater", "Petrol", "Manual"]
    },
    {
        id: 2,
        name: "Maruti Swift",
        type: "car",
        category: "Hatchback",
        image: "/images/cars/swift.jpeg",
        prices: {
            "1-10 Days": "₹1200",
            "11-29 Days": "₹1100",
            "30+ Days": "₹950"
        },
        features: ["5 Seater", "Petrol", "Manual"]
    },
    {
        id: 3,
        name: "Honda Amaze",
        type: "car",
        category: "Sedan",
        image: "/images/cars/amaze.webp",
        prices: {
            "1-10 Days": "₹1400",
            "11-29 Days": "₹1300",
            "30+ Days": "₹1100"
        },
        features: ["5 Seater", "Petrol", "Manual"]
    },
    {
        id: 4,
        name: "Swift Dzire (Manual)",
        type: "car",
        category: "Sedan",
        image: "/images/cars/dzire.avif",
        prices: {
            "1-10 Days": "₹1400",
            "11-29 Days": "₹1300",
            "30+ Days": "₹1100"
        },
        features: ["5 Seater", "Petrol", "Manual"]
    },
    {
        id: 5,
        name: "Maruti Fronx (Manual)",
        type: "car",
        category: "SUV",
        image: "/images/cars/fronx.avif",
        prices: {
            "1-10 Days": "₹1600",
            "11-29 Days": "₹1500",
            "30+ Days": "₹1300"
        },
        features: ["5 Seater", "Petrol", "Manual"]
    },
    {
        id: 6,
        name: "Maruti Brezza",
        type: "car",
        category: "SUV",
        image: "/images/cars/brezza.avif",
        prices: {
            "1-10 Days": "₹1800",
            "11-29 Days": "₹1600",
            "30+ Days": "₹1400"
        },
        features: ["5 Seater", "Petrol", "Manual"]
    },
    {
        id: 7,
        name: "Maruti Ertiga",
        type: "car",
        category: "MPV",
        image: "/images/cars/ertiga.avif",
        prices: {
            "1-10 Days": "₹2000",
            "11-29 Days": "₹1800",
            "30+ Days": "₹1600"
        },
        features: ["7 Seater", "Petrol", "Manual"]
    },
    {
        id: 8,
        name: "Maruti Grand Vitara",
        type: "car",
        category: "SUV",
        image: "/images/cars/grantvitara.jpeg",
        prices: {
            "1-10 Days": "₹2200",
            "11-29 Days": "₹2000",
            "30+ Days": "₹1800"
        },
        features: ["5 Seater", "Petrol", "Manual"]
    },
    {
        id: 9,
        name: "Maruti Wagon R",
        type: "car",
        category: "Hatchback",
        image: "/images/cars/wagonr.avif",
        prices: {
            "1-10 Days": "₹1000",
            "11-29 Days": "₹900",
            "30+ Days": "₹800"
        },
        features: ["5 Seater", "Petrol", "Manual"]
    },
    // Automatic Cars
    {
        id: 10,
        name: "Maruti S-Presso",
        type: "car",
        category: "Hatchback",
        image: "/images/cars/espresso.avif",
        prices: {
            "1-10 Days": "₹1100",
            "11-29 Days": "₹1000",
            "30+ Days": "₹900"
        },
        features: ["5 Seater", "Petrol", "Automatic"]
    },
    {
        id: 11,
        name: "Maruti Celerio",
        type: "car",
        category: "Hatchback",
        image: "/images/cars/celerio.avif",
        prices: {
            "1-10 Days": "₹1200",
            "11-29 Days": "₹1100",
            "30+ Days": "₹950"
        },
        features: ["5 Seater", "Petrol", "Automatic"]
    },
    {
        id: 12,
        name: "Maruti Fronx (Automatic)",
        type: "car",
        category: "SUV",
        image: "/images/cars/fronx.avif",
        prices: {
            "1-10 Days": "₹1800",
            "11-29 Days": "₹1600",
            "30+ Days": "₹1400"
        },
        features: ["5 Seater", "Petrol", "Automatic"]
    },
    {
        id: 13,
        name: "Swift Dzire (Automatic)",
        type: "car",
        category: "Sedan",
        image: "/images/cars/dzire.avif",
        prices: {
            "1-10 Days": "₹1600",
            "11-29 Days": "₹1400",
            "30+ Days": "₹1200"
        },
        features: ["5 Seater", "Petrol", "Automatic"]
    },
    // Bikes
    {
        id: 14,
        name: "Royal Enfield Classic 350",
        type: "bike",
        category: "Cruiser",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&auto=format&fit=crop",
        prices: {
            "1-10 Days": "₹800",
            "11-29 Days": "₹700",
            "30+ Days": "₹600"
        },
        features: ["350cc", "Single Channel ABS", "Comfortable"]
    },
    {
        id: 15,
        name: "Yamaha MT-15",
        type: "bike",
        category: "Sports",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&auto=format&fit=crop",
        prices: {
            "1-10 Days": "₹700",
            "11-29 Days": "₹600",
            "30+ Days": "₹500"
        },
        features: ["155cc", "Liquid Cooled", "Slipper Clutch"]
    },
    {
        id: 16,
        name: "Honda Activa 6G",
        type: "bike",
        category: "Scooter",
        image: "https://images.unsplash.com/photo-1594435753896-f0f9b6999238?w=500&auto=format&fit=crop",
        prices: {
            "1-10 Days": "₹400",
            "11-29 Days": "₹350",
            "30+ Days": "₹300"
        },
        features: ["110cc", "Automatic", "LED Headlamp"]
    }
];
