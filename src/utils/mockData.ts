
export interface Issue {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High';
  upvotes: number;
  createdAt: string;
  imageUrl?: string;
  reportedBy: string;
}

export const categories = [
  'Illegal Dumping',
  'Water Pollution',
  'Air Pollution',
  'Noise Pollution',
  'Wildlife Concern',
  'Deforestation',
  'Public Space Damage',
  'Sewage Issue',
  'Broken Infrastructure',
  'Other'
];

export const mockIssues: Issue[] = [
  {
    id: '1',
    title: 'Illegal Waste Dumping at Riverside Park',
    description: 'Large amounts of construction waste have been dumped near the east entrance of Riverside Park. It includes broken concrete, plastic, and metal scraps which pose a hazard to park visitors and wildlife.',
    category: 'Illegal Dumping',
    location: '123 Riverside Drive',
    status: 'Open',
    priority: 'High',
    upvotes: 15,
    createdAt: '2023-04-20T10:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyYmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    reportedBy: 'John Smith'
  },
  {
    id: '2',
    title: 'Water Contamination in Silver Creek',
    description: 'The water in Silver Creek has turned unusually murky with a chemical smell. There appears to be an oily film on the surface and some dead fish have been spotted.',
    category: 'Water Pollution',
    location: 'Silver Creek Nature Reserve',
    status: 'In Progress',
    priority: 'High',
    upvotes: 32,
    createdAt: '2023-04-18T14:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwb2xsdXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    reportedBy: 'Maria Rodriguez'
  },
  {
    id: '3',
    title: 'Excessive Smoke from Factory',
    description: 'The downtown factory has been emitting thick black smoke daily between 6-8 AM, causing respiratory issues for nearby residents.',
    category: 'Air Pollution',
    location: '45 Industrial Blvd',
    status: 'Open',
    priority: 'Medium',
    upvotes: 7,
    createdAt: '2023-04-22T08:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1611273426858-450286b36689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdG9yeSUyMHNtb2tlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    reportedBy: 'Ahmed Hassan'
  },
  {
    id: '4',
    title: 'Fallen Tree Blocking Trail',
    description: 'A large oak tree has fallen across the main hiking trail in Woodland Park. It completely blocks passage and appears unstable.',
    category: 'Public Space Damage',
    location: 'Woodland Park, North Trail',
    status: 'In Progress',
    priority: 'Low',
    upvotes: 3,
    createdAt: '2023-04-23T16:20:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1517660029924-161f9df15789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFsbGVuJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    reportedBy: 'Lisa Johnson'
  },
  {
    id: '5',
    title: 'Construction Noise After Hours',
    description: 'The construction site at 78 Main St has been operating heavy machinery between 11PM and 5AM, violating noise ordinances and disturbing local residents.',
    category: 'Noise Pollution',
    location: '78 Main St',
    status: 'Resolved',
    priority: 'Medium',
    upvotes: 19,
    createdAt: '2023-04-19T23:10:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1573155993874-d5d48af862ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    reportedBy: 'Carlos Mendez'
  },
  {
    id: '6',
    title: 'Sewage Leak in Downtown Area',
    description: 'There is a significant sewage leak on Oak Street between 5th and 6th Avenue. Strong odor and visible waste water on the street.',
    category: 'Sewage Issue',
    location: 'Oak St between 5th and 6th Ave',
    status: 'Open',
    priority: 'High',
    upvotes: 28,
    createdAt: '2023-04-21T13:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1596731498067-73eb5b37b921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2V3YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    reportedBy: 'Emma Wilson'
  }
];
