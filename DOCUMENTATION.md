# SnapCast - Video Sharing Platform Documentation

## Project Overview
SnapCast is a Loom-like video sharing platform built with Next.js 14+ using the App Router architecture. The application allows users to upload, record, and share videos with a modern, responsive interface.

## Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Icons & Images**: SVG icons and Next.js Image optimization
- **Fonts**: Custom Satoshi font family

## Project Structure

```
linking/
├── app/                          # Next.js App Router directory
│   ├── (auth)/                   # Authentication route group
│   │   └── sign-in/              # Sign-in page (placeholder)
│   ├── (root)/                   # Main application routes
│   │   ├── layout.tsx            # Root layout with Navbar
│   │   ├── page.tsx              # Homepage ("/")
│   │   └── profile/
│   │       └── [id]/
│   │           └── page.tsx      # Dynamic user profile page
│   ├── layout.tsx                # Global layout
│   └── globals.css               # Global styles
├── components/                   # Reusable React components
│   ├── Header.tsx                # Page header with user info & actions
│   └── Navbar.tsx                # Navigation bar component
├── constants/                    # Application constants
│   └── index.ts                  # Configuration and dummy data
├── public/assets/                # Static assets
│   ├── icons/                    # SVG icons
│   ├── images/                   # User avatars and images
│   └── samples/                  # Sample thumbnails and videos
└── fonts/                        # Custom font files
```

## Implemented Features

### 1. Navigation System (`components/Navbar.tsx`)
The navigation bar provides core navigation functionality:

**Features:**
- **Logo & Brand**: SnapCast logo with home link navigation
- **Profile Access**: Clickable user avatar for profile navigation
- **Logout Functionality**: Logout icon for user session management

**Key Components:**
```typescript
// Logo and brand name with home navigation
<Link href='/'>
    <Image src="/assets/icons/logo.svg" alt='logo' width={32} height={32} />
    <h1>SnapCast</h1>
</Link>

// User profile navigation - routes to /profile/{userId}
<button onClick={()=> router.push('/profile/123')}>
    <Image src="/assets/images/dummy.jpg" alt="User" 
           width={36} height={36} className="rounded-full" />
</button>

// Logout button with rotated logout icon
<button className='cursor-pointer'>
    <Image src="/assets/icons/logout.svg" alt="logout" 
           width={24} height={24} className="rotate-180" />
</button>
```

### 2. Page Header System (`components/Header.tsx`)
A dynamic header component that adapts to different page contexts:

**Features:**
- **User Profile Display**: Shows user avatar, email, and name
- **Action Buttons**: Upload and Record video functionality
- **Search Interface**: Global search bar for videos, tags, and folders
- **Responsive Design**: Adapts to different screen sizes

**Key Components:**
```typescript
// User profile section with conditional avatar display
{userImg && (
    <Image src={userImg} alt="User Avatar" 
           width={66} height={66} className="rounded-full" />
)}

// Page title and subtitle
<article>
    <p>{subHeader}</p>  {/* Email or context info */}
    <h1>{title}</h1>    {/* Page/User name */}
</article>

// Action buttons for video operations
<Link href="/upload">
    <Image src="/assets/icons/upload.svg" alt="upload" width={16} height={16} />
    <span>Upload a Video</span>
</Link>

<button className="primary-btn">
    <Image src={ICONS.record} alt="record" width={16} height={16} />
    <span>Record</span>
</button>

// Global search functionality
<input type="text" placeholder="Search for Videos, tags, folders ..." />
```

## Routing Architecture

### App Router Structure
The application uses Next.js 14+ App Router with route groups for organization:

#### 1. Route Groups
- **`(auth)/`**: Authentication-related pages (isolated routing)
- **`(root)/`**: Main application pages with shared navigation

#### 2. Dynamic Routing
```typescript
// Profile page with dynamic user ID parameter
// Route: /profile/[id]
// File: app/(root)/profile/[id]/page.tsx

const Page = async ({params}: ParamsWithSearch) => {
    const { id } = await params;  // Extract dynamic route parameter
    // Renders user profile for specific ID
}
```

#### 3. Layout Hierarchy
```
app/layout.tsx (Global layout)
└── app/(root)/layout.tsx (Includes Navbar)
    ├── app/(root)/page.tsx (Homepage)
    └── app/(root)/profile/[id]/page.tsx (User profiles)
```

### Navigation Flow
1. **Homepage (`/`)**: Landing page showing "All Videos" with public library
2. **Profile Pages (`/profile/{id}`)**: Individual user profiles with personal data
3. **Upload Flow (`/upload`)**: Video upload interface (link configured)
4. **Authentication (`/sign-in`)**: User authentication (placeholder)

## Constants & Configuration

### Application Constants (`constants/index.ts`)
- **File Size Limits**: Video (500MB) and Thumbnail (10MB) constraints
- **External Services**: Bunny CDN configuration for video storage/streaming
- **UI Elements**: Icon paths, filter options, visibility settings
- **Mock Data**: Sample video cards for development and testing

### Key Configurations:
```typescript
// File upload constraints
export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;  // 500MB
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;  // 10MB

// CDN and streaming services
export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  // ... other CDN configurations
};

// UI interaction elements
export const filterOptions = ["Most Viewed", "Most Recent", "Oldest First", "Least Viewed"];
export const visibilities = ["public", "private"];
```

## Asset Management
- **Icons**: SVG format for scalability and performance
- **Images**: Optimized user avatars and sample content
- **Fonts**: Custom Satoshi font family for consistent typography

## Current Implementation Status

### ✅ Completed Features
- [x] Project structure and configuration
- [x] Navigation bar with logo, profile, and logout
- [x] Dynamic header component with user info
- [x] Search bar interface
- [x] Action buttons (Upload/Record)
- [x] Dynamic routing for user profiles
- [x] Constants and configuration setup
- [x] Asset organization and optimization

### 🔄 In Progress / Placeholder Features
- [ ] Authentication system implementation
- [ ] Video upload functionality
- [ ] Video recording feature
- [ ] Search functionality backend
- [ ] User profile data integration
- [ ] Video grid/list display

### 📋 Next Steps
1. Implement authentication system
2. Connect backend for user data
3. Build video upload and processing
4. Add video recording capabilities
5. Implement search and filtering
6. Create video display components

## Development Notes
- Uses TypeScript for type safety
- Implements Next.js App Router for modern routing
- Responsive design with Tailwind CSS
- Component-based architecture for reusability
- Optimized asset loading with Next.js Image component
