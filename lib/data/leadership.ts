export interface Leader {
    name: string;
    image: string;
    role: string;
    message?: string;
    title?: string;
}

export const leadershipData: Leader[] = [
    {
        name: 'Mrs. G. Krishna Mohan',
        image: '/New folder/hod.jpeg',
        role: 'Head of the Department — ECE',
        title: 'KING OF ECE'
    },
    {
        name: 'Dr. D. DAYAKAR',
        image: '/New folder (3)/principle.jpeg',
        role: 'Principal',
        message: 'Welcome to ÉCLAT 2K26. It is our immense pleasure to host this national level technical symposium, encouraging innovation and excellence.'
    },
    {
        name: 'B. Srikanth',
        image: '/New folder (3)/Srikanth .jpeg',
        role: 'Management/Director',
        message: 'Empowering students with technical skills and industrial exposure is our core mission.'
    },
    {
        name: 'A. Saidaiah',
        image: '/New folder (3)/saidai.jpeg',
        role: 'Management/Director',
        message: 'Innovation begins where textbooks end. We strive to provide a platform for every creative mind.'
    },
    {
        name: 'B. Ramesh',
        image: '/New folder (3)/ramesh sir 2.jpeg',
        role: 'Management/Director',
        message: 'Technical education is the backbone of national development. Let ÉCLAT be the spark.'
    },
    {
        name: 'D. Venkateshwar Rao',
        image: '/New folder (3)/venkateshwar.jpeg',
        role: 'Management/Director',
        message: 'Strive for excellence in everything you do. Success will follow naturally.'
    },
    {
        name: 'Ch. Laxmi Narayana',
        image: '/New folder (3)/laxmi narayana.jpeg',
        role: 'Management/Director',
        message: 'Collaboration and innovation are the keys to a better future.'
    }
];
