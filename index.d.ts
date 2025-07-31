declare interface User {
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

type VideoFormValues = {
  title: string;
  description: string;
  tags: string;
  visibility: "public" | "private";
};

declare interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: Array<{ value: string; label: string }>;
}

declare interface FileInputProps {
  id: string;
  label: string;
  accept: string;
  file: File | null;
  previewUrl: string | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  type: "video" | "image";
}

declare interface TranscriptEntry {
  time: string;
  text: string;
}

declare interface VideoFormValues {
  title: string;
  description: string;
  tags: string;
  visibility: "public" | "private";
}
declare interface NavbarProps {
  user: User | undefined;
}

declare interface SearchResult {
  video: {
    id: string;
    videoId: string;
    title: string;
    thumbnailUrl: string;
  };
  user: {
    id: string;
    name: string | null;
    image: string | null;
  } | null;
}

declare interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  userImg: string;
  username: string;
  createdAt: Date;
  views: number;
  visibility: Visibility;
  duration: number | null;
}

declare interface VideoDetailHeaderProps {
  title: string;
  createdAt: Date;
  userImg: string | null | undefined;
  username?: string;
  videoId: string;
  ownerId: string;
  visibility: string;
  thumbnailUrl: string;
}

declare interface VideoPlayerProps {
  videoId: string;
  className?: string;
}
declare interface VideoInfoProps {
  transcript?: string;
  title: string;
  createdAt: Date;
  description: string;
  videoId: string;
  videoUrl: string;
}

declare interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  fallback?: string;
  alt: string;
  src: string | null;
}

// type Visibility = "public" | "private";
type Visibility = string

declare interface VideoDetails {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  tags: string | string[];
  visibility: Visibility;
  duration?: number | null;
}

declare interface BunnyVideoResponse {
  guid: string;
  status: number;
  encodeProgress?: number;
}

declare type ApiResponse<T> =
  | ({ success: true; error: null } & T)
  | { success: false; error: string };

declare interface ApiFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: object;
  expectJson?: boolean;
  bunnyType: "stream" | "storage";
}

declare interface BunnyStreamApiOptions {
  method?: string;
  body?: object;
}

declare interface VideoUploadUrlResponse {
  videoId: string;
  uploadUrl: string;
  accessKey: string;
}

declare interface ThumbnailUploadUrlResponse {
  uploadUrl: string;
  cdnUrl: string;
  accessKey: string;
}

declare interface VideoProcessingStatus {
  isProcessed: boolean;
  encodingProgress: number;
  status: number;
}

declare interface VideoWithUserResult {
  video: {
    id: string;
    videoId: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    userId: string;
    views: number;
    tags: string[];
    visibility: Visibility;
    createdAt: Date;
    updatedAt: Date;
  };
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
}

declare interface VideoObject {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  userId: string;
  views: number;
  tags: string[];
  visibility: Visibility;
  createdAt: Date;
  updatedAt: Date;
}

declare interface UserWithVideos {
  user: {
    id: string;
    name: string | null;
    image: string | null;
    email: string | null;
  };
  videos: VideoObject[];
  count: number;
}

declare interface ExtendedMediaStream extends MediaStream {
  _originalStreams?: MediaStream[];
}

declare interface SharedHeaderProps {
  subHeader: string;
  title: string;
  userImg?: string;
}

declare interface SharedHeaderProps {
  subHeader: string;
  title: string;
  userImg?: string;
}

declare interface Params {
  params: Promise<Record<string, string>>;
}

declare interface SearchParams {
  searchParams: Promise<Record<string, string | undefined>>;
}

declare interface ParamsWithSearch {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | undefined>>;
}

declare interface DropdownListProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  triggerElement: ReactNode;
}

declare interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
}

declare interface MediaStreams {
  displayStream: MediaStream;
  micStream: MediaStream | null;
  hasDisplayAudio: boolean;
}

declare interface BunnyRecordingState {
  isRecording: boolean;
  recordedBlob: Blob | null;
  recordedVideoUrl: string;
  recordingDuration: number;
}

declare interface ExtendedMediaStream extends MediaStream {
  _originalStreams?: MediaStream[];
}

// Types
interface VideoQueryResult {
  video: typeof videos.$inferSelect;
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
}

interface PaginationResult<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    pageSize: number | unknown;
  };
}

declare interface RecordingHandlers {
  onDataAvailable: (e: BlobEvent) => void;
  onStop: () => void;
}

const dummyCards = [
  {
    id: "1",
    title: "Snapchat Message - 30 June 2025",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-05-01"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156
  },
  {
    id: "2",
    title: "Product Demo Walkthrough",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-06-15"),
    userImg: "/assets/images/sarah.png",
    username: "Sarah",
    views: 245,
    visibility: "public",
    duration: 320
  },
  {
    id: "3",
    title: "Weekly Team Meeting Highlights",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-07-02"),
    userImg: "/assets/images/michael.png",
    username: "Michael",
    views: 78,
    visibility: "private",
    duration: 412
  },
  {
    id: "4",
    title: "Bug Fix Tutorial - Authentication Issue",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-07-10"),
    userImg: "/assets/images/emily.png",
    username: "Emily",
    views: 189,
    visibility: "public",
    duration: 283
  },
  {
    id: "5",
    title: "New Feature Overview - Dark Mode",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-07-18"),
    userImg: "/assets/images/david.png",
    username: "David",
    views: 156,
    visibility: "public",
    duration: 275
  },
  {
    id: "6",
    title: "Client Presentation - Q2 Results",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-07-22"),
    userImg: "/assets/images/lisa.png",
    username: "Lisa",
    views: 89,
    visibility: "private",
    duration: 198
  },
  {
    id: "7",
    title: "UI/UX Design Review Session",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-07-25"),
    userImg: "/assets/images/alex.png",
    username: "Alex",
    views: 324,
    visibility: "public",
    duration: 456
  },
  {
    id: "8",
    title: "Marketing Strategy - Summer Campaign",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-07-28"),
    userImg: "/assets/images/jessica.png",
    username: "Jessica",
    views: 167,
    visibility: "public",
    duration: 345
  }
]