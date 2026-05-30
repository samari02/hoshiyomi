export type ReadingSection = {
  key: string;
  title: string;
  body: string;
};

export type ReadingContent = {
  sections: ReadingSection[];
};

export type Reading = {
  id: string;
  client_name: string;
  birth_date: string;
  birth_time: string | null;
  birth_place: string;
  title: string;
  chart_image_path: string | null;
  content: ReadingContent;
  personal_message: string | null;
  created_at: string;
};
