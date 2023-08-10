import { LessonWithPath } from "~/types/course";

export default async (chapterSlug: string, lessonSlug: string) =>
  // Use sessionStorage to cache the lesson data
  useFetchWithCache<LessonWithPath>(
    `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  );
