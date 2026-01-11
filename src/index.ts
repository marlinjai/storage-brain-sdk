// Main client
export { StorageBrain, StorageBrain as default } from './client';

// Types
export type {
  StorageBrainConfig,
  UploadOptions,
  FileInfo,
  ListFilesOptions,
  ListFilesResult,
  QuotaInfo,
  TenantInfo,
  UploadHandshake,
  FileMetadata,
  ThumbnailUrls,
  OcrResult,
  OcrBlock,
  BoundingBox,
  ImageInfo,
} from './types';

// Errors
export {
  StorageBrainError,
  AuthenticationError,
  QuotaExceededError,
  InvalidFileTypeError,
  FileTooLargeError,
  FileNotFoundError,
  NetworkError,
  UploadError,
  ValidationError,
} from './errors';

// Constants and types from constants
export type {
  AllowedMimeType,
  ProcessingContext,
  ProcessingStatus,
  ThumbnailSize,
} from './constants';

export {
  ALLOWED_FILE_TYPES,
  ALLOWED_MIME_TYPES,
  IMAGE_MIME_TYPES,
  DOCUMENT_MIME_TYPES,
  PROCESSING_CONTEXTS,
  PROCESSING_STATUSES,
  THUMBNAIL_SIZES,
  MAX_FILE_SIZE_BYTES,
} from './constants';
