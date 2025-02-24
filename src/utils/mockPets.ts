import type { Pet } from '../types/pet';

export const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    breed: 'Golden Retriever',
    age: 2,
    gender: 'female',
    imageUrl: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerId: 'user1',
    ownerName: 'Sarah Johnson',
    dateOfBirth: '2022-01-15',
    weight: 25,
    microchipId: 'CHIP123456',
    location: {
      address: '123 Pet Street',
      city: 'San Francisco',
      state: 'California',
      country: 'USA',
      postalCode: '94105'
    },
    medicalHistory: [
      {
        id: '1',
        date: '2024-02-15',
        condition: 'Annual Check-up',
        treatment: 'General examination and vaccinations',
        veterinarian: 'Dr. Smith'
      }
    ],
    vaccinations: [
      {
        id: '1',
        name: 'Rabies',
        date: '2024-02-15',
        nextDueDate: '2025-02-15',
        administrator: 'Dr. Smith'
      }
    ],
    media: [
      {
        id: '1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Playing in the park',
        timestamp: '2024-03-15T10:30:00Z'
      }
    ],
    likes: [],
    reviews: [],
    comments: [],
    rating: 5
  },
  {
    id: '2',
    name: 'Max',
    breed: 'German Shepherd',
    age: 3,
    gender: 'male',
    imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerId: 'user2',
    ownerName: 'John Smith',
    dateOfBirth: '2021-03-20',
    weight: 32,
    microchipId: 'CHIP789012',
    location: {
      address: '456 Dog Lane',
      city: 'Los Angeles',
      state: 'California',
      country: 'USA',
      postalCode: '90001'
    },
    medicalHistory: [],
    vaccinations: [],
    media: [],
    likes: [],
    reviews: [],
    comments: [],
    rating: 4.5
  },
  {
    id: '3',
    name: 'Bella',
    breed: 'French Bulldog',
    age: 1,
    gender: 'female',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerId: 'user3',
    ownerName: 'Emily Davis',
    dateOfBirth: '2023-05-10',
    weight: 12,
    location: {
      address: '789 Puppy Road',
      city: 'New York',
      state: 'New York',
      country: 'USA',
      postalCode: '10001'
    },
    medicalHistory: [],
    vaccinations: [],
    media: [],
    likes: [],
    reviews: [],
    comments: [],
    rating: 5
  },
  {
    id: '4',
    name: 'Rocky',
    breed: 'Siberian Husky',
    age: 4,
    gender: 'male',
    imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerId: 'user4',
    ownerName: 'Michael Wilson',
    dateOfBirth: '2020-08-15',
    weight: 28,
    location: {
      address: '321 Snow Street',
      city: 'Denver',
      state: 'Colorado',
      country: 'USA',
      postalCode: '80201'
    },
    medicalHistory: [],
    vaccinations: [],
    media: [],
    likes: [],
    reviews: [],
    comments: [],
    rating: 4.8
  },
  {
    id: '5',
    name: 'Coco',
    breed: 'Poodle',
    age: 2,
    gender: 'female',
    imageUrl: 'https://images.unsplash.com/photo-1616590284209-4ca544f4e19b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerId: 'user5',
    ownerName: 'Sophie Brown',
    dateOfBirth: '2022-04-01',
    weight: 15,
    location: {
      address: '567 Curly Lane',
      city: 'Miami',
      state: 'Florida',
      country: 'USA',
      postalCode: '33101'
    },
    medicalHistory: [],
    vaccinations: [],
    media: [],
    likes: [],
    reviews: [],
    comments: [],
    rating: 4.9
  },
  {
    id: '6',
    name: 'Charlie',
    breed: 'Labrador Retriever',
    age: 5,
    gender: 'male',
    imageUrl: 'https://images.unsplash.com/photo-1579110395001-c80cc7405ada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerId: 'user6',
    ownerName: 'David Miller',
    dateOfBirth: '2019-11-30',
    weight: 30,
    location: {
      address: '890 Lake View',
      city: 'Seattle',
      state: 'Washington',
      country: 'USA',
      postalCode: '98101'
    },
    medicalHistory: [],
    vaccinations: [],
    media: [],
    likes: [],
    reviews: [],
    comments: [],
    rating: 4.7
  },
  {
    id: '7',
    name: 'Milo',
    breed: 'Beagle',
    age: 3,
    gender: 'male',
    imageUrl: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerId: 'user7',
    ownerName: 'Emma Wilson',
    dateOfBirth: '2021-06-20',
    weight: 13,
    location: {
      address: '123 Hunt Street',
      city: 'Boston',
      state: 'Massachusetts',
      country: 'USA',
      postalCode: '02101'
    },
    medicalHistory: [],
    vaccinations: [],
    media: [],
    likes: [],
    reviews: [],
    comments: [],
    rating: 4.6
  },
  {
    id: '8',
    name: 'Lucy',
    breed: 'Yorkshire Terrier',
    age: 2,
    gender: 'female',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerId: 'user8',
    ownerName: 'Oliver Taylor',
    dateOfBirth: '2022-09-15',
    weight: 3,
    location: {
      address: '456 Tiny Road',
      city: 'Chicago',
      state: 'Illinois',
      country: 'USA',
      postalCode: '60601'
    },
    medicalHistory: [],
    vaccinations: [],
    media: [],
    likes: [],
    reviews: [],
    comments: [],
    rating: 5
  },
  {
    id: '9',
    name: 'Bailey',
    breed: 'Australian Shepherd',
    age: 4,
    gender: 'female',
    imageUrl: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerId: 'user9',
    ownerName: 'Liam Anderson',
    dateOfBirth: '2020-02-28',
    weight: 22,
    location: {
      address: '789 Herding Way',
      city: 'Austin',
      state: 'Texas',
      country: 'USA',
      postalCode: '73301'
    },
    medicalHistory: [],
    vaccinations: [],
    media: [],
    likes: [],
    reviews: [],
    comments: [],
    rating: 4.8
  },
  {
    id: '10',
    name: 'Cooper',
    breed: 'Rottweiler',
    age: 3,
    gender: 'male',
    imageUrl: 'https://images.unsplash.com/photo-1567752881298-894bb81f9379?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ownerId: 'user10',
    ownerName: 'Isabella Martinez',
    dateOfBirth: '2021-01-10',
    weight: 45,
    location: {
      address: '321 Guard Street',
      city: 'Phoenix',
      state: 'Arizona',
      country: 'USA',
      postalCode: '85001'
    },
    medicalHistory: [],
    vaccinations: [],
    media: [],
    likes: [],
    reviews: [],
    comments: [],
    rating: 4.7
  }
];