type Lesson = {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  videoId: number;
  text: string;
  sourceUrl?: string;
  path: string;
};

export const useFirstLesson = (): Lesson => {
  const { chapters } = useCourse();
  return chapters[0].lessons[0];
};
