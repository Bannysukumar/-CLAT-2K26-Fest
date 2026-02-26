export interface Leader {
    name: string;
    image: string;
    role: string;
    message?: string;
    title?: string;
    category: 'HOD' | 'Management' | 'Executive Directors' | 'Deans' | 'Principal';
}

export const leadershipData: Leader[] = [
    {
        name: 'Mrs. G. Krishna Mohan',
        image: '/New folder/hod.jpeg',
        role: 'Head of the Department — ECE',
        title: 'KING OF ECE',
        category: 'HOD'
    },
    {
        name: 'Ln D. Venkateshwar Rao',
        image: '/New folder (3)/venkateshwar.jpeg',
        role: 'Management/Director',
        category: 'Management'
    },
    {
        name: 'Dr. Ch. Laxmi Narayana',
        image: '/New folder (3)/laxmi narayana.jpeg',
        role: 'Management/Director',
        category: 'Management'
    },
    {
        name: 'B. Ramesh',
        image: '/New folder (3)/ramesh sir 2.jpeg',
        role: 'Executive Director',
        title: 'EXECUTIVE DIRECTOR',
        category: 'Executive Directors'
    },
    {
        name: 'A. Saidaiah',
        image: '/New folder (3)/saidai.jpeg',
        role: 'Executive Director',
        title: 'EXECUTIVE DIRECTOR',
        category: 'Executive Directors'
    },
    {
        name: 'B. Srikanth',
        image: '/New folder (3)/Srikanth .jpeg',
        role: 'Executive Director',
        title: 'EXECUTIVE DIRECTOR',
        category: 'Executive Directors'
    },
    {
        name: 'P. Babu Rao',
        image: '/New folder (3)/P. Babu Rao.jpg',
        role: 'Dean of Academics',
        title: 'DEAN',
        category: 'Deans'
    },
    {
        name: 'M. Lakpathi',
        image: '/New folder (3)/M. Lakpathi.jpeg',
        role: 'Dean of Welfare',
        title: 'DEAN',
        category: 'Deans'
    },
    {
        name: 'Dr. D. DAYAKAR',
        image: '/New folder (3)/principle.jpeg',
        role: 'Principal',
        title: 'PRINCIPAL',
        category: 'Principal',
        message: 'Welcome to ÉCLAT 2K26. It is our immense pleasure to host this national level technical symposium, encouraging innovation and excellence.'
    }
];
